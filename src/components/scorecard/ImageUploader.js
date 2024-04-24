import React  from 'react';
import './styles/ImageUploader.css'

class ImageUploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: ''
    };

    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  handleImageUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        imageUrl: reader.result
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  render() {
    return (
        <div>
            <input
            type="file"
            accept="image/*"
            onChange={this.handleImageUpload}
            style={{ display: 'none' }}
            ref={fileInput => (this.fileInput = fileInput)}
            />
            <div onClick={() => this.fileInput.click()} className="image-upload-container">
            {
                this.state.imageUrl 
                    ? (<img src={this.state.imageUrl} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '100%' }}/>)
                    : (<span style={{ alignContent: 'center' }}>+</span>)
            }
            </div>
        </div>
    );
  }
}

export default ImageUploader;
