import React from 'react';
import { Icon, Upload, message, Button } from 'antd';

export default function input(p) {
  const props = {
    name: 'file',
    action: p.action,
    enctype: 'multipart/form-data',
    withCredentials: true,
    type: 'file',
    onChange(info) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} 上传成功`);
        p.onChange(p.name, info.file.response.url);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 上传失败`);
      }
    },
    onRemove() {
      p.onChange(p.name, '');
    },
  };

  return (
    <div className="fr-upload-mod">
      <Upload {...props} className="fr-upload-file">
        <Button>
          <Icon type="upload" /> 上传
        </Button>
      </Upload>
      {p.value && (
        <a
          href={p.value}
          target="_blank"
          rel="noopener noreferrer"
          className="fr-upload-preview"
        >
          已上传地址
        </a>
      )}
    </div>
  );
}
