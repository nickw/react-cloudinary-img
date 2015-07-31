import React, { Component } from 'react';
import objectAssign from 'object-assign';

class CloudinaryImage extends Component {
  render() {
    const cloudinaryUtils = require('cloudinary/lib/utils');

    let { options } = this.props;
    const { image, cloudName = this.context.cloudName } = this.props;
    const publicId = typeof image === 'object' ? image.public_id : image;

    if (cloudName) {
      options = objectAssign({}, options, { cloud_name: cloudName });
    }

    if (publicId) {
      const url = cloudinaryUtils.url(publicId, options);
      return <img src={url} {...this.props} />;
    }

    return false;
  }
}

CloudinaryImage.propTypes = {
  image: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.string,
  ]),
  cloudName: React.PropTypes.string,
  options: React.PropTypes.shape({
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    gravity: React.PropTypes.string,
    crop: React.PropTypes.string,
  }),
};

CloudinaryImage.contextTypes = {
  cloudName: React.PropTypes.string,
};

export default CloudinaryImage;
