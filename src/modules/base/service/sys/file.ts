import { Provide } from '@midwayjs/decorator';
import { CoolCommException } from '@cool-midway/core';
import { Context } from '@midwayjs/koa';
import axios from 'axios';
import * as qiniu from 'qiniu';
import * as _ from 'lodash';
import { qiniuConfig } from '../../../../config/qiniu.config';
const fs = require('fs');

@Provide()
export class FileStorageService {
  public async uploadFile(ctx: Context, qiniuTokenData: any) {
    const { fields, files } = ctx;
    if (_.isEmpty(files)) {
      throw new CoolCommException('file does not exist');
    }
    const file = files[0];
    const mac = new qiniu.auth.digest.Mac(qiniuConfig.accessKeyId, qiniuConfig.accessKeySecret);

    const uploadToken = qiniuTokenData.token;

    // Configure upload settings
    const config = new qiniu.conf.Config();
    config.zone = qiniu.zone.Zone_z0; // Adjust the zone based on your bucket location
    const formUploader = new qiniu.form_up.FormUploader(config);
    const putExtra = new qiniu.form_up.PutExtra();

    // File path and key
    const localFile = file.data; // Ensure this is the correct path to the file
    const key = `${Date.now()}-${fields.key}`;
    if(typeof localFile !== 'string') return;
    // Perform the upload
    return new Promise((resolve, reject) => {
      formUploader.putFile(uploadToken, key, localFile, putExtra, function(respErr, respBody, respInfo) {
        if (respErr) {
          reject(respErr);
        }
        if (respInfo.statusCode === 200) {
          resolve(qiniuTokenData.publicDomain + '/' + respBody.key);
        } else {
          reject(new Error('Upload failed with status: ' + respInfo.statusCode));
        }
      });
    });
  }
}
