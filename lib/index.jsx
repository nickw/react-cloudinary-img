import React, { Component } from 'react';

class CloudinaryImage extends Component {
  render() {
    const cloudinaryUtils = require('cloudinary/lib/utils');

    const { image, options } = this.props;
    const publicId = typeof image === 'object' ? image.public_id : image;

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
  options: React.PropTypes.shape({
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    gravity: React.PropTypes.string,
    crop: React.PropTypes.string,
  }),
};

export default CloudinaryImage;
