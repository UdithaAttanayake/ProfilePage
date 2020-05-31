import React, { Component } from "react";
import logo from "../Components/public/image/maxresdefault.jpg";
import cse from "../Components/public/image/yt1.png";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

class Banner extends Component {
  state = {
    loading: false,
  };

  handleChange = (info) => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>
        this.setState({
          imageUrl,
          loading: false,
        })
      );
    }
  };
  render() {
    const uploadButton = (
      <div class="profilepicture">
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload Profile Picture</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <section className="container-banner">
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={this.handleChange}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="avatar" style={{ width: "50%" , margin:10 }} />
          ) : (
            uploadButton
          )}
        </Upload>
        <h1> Last Login Time: </h1>
        <p id="paragarph1">
          {" "}
          Latest Activities <br />
        </p>
      </section>
    );
  }
}

export default Banner;
