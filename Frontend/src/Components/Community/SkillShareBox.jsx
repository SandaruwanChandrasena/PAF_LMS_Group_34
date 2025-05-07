<Form.Item
label="Upload Media (up to 3 photos or videos, videos max 30 sec)"
rules={[{ required: mediaFiles.length === 0, message: "Please upload at least one media file" }]}
>
<Upload
  accept="image/*,video/*"
  beforeUpload={handleFileUpload}
  showUploadList={false}
  disabled={mediaFiles.length >= 3 || uploadingMedia}
>
  <Button 
    icon={<UploadOutlined />} 
    disabled={mediaFiles.length >= 3 || uploadingMedia}
  >
    Upload Media
  </Button>
</Upload>
</Form.Item>

<Form.Item>
<Button 
  type="primary" 
  htmlType="submit" 
  loading={loading} 
  disabled={mediaFiles.length === 0 || uploadingMedia}
  style={{
    background: '#FF6B35', 
    borderColor: '#FF6B35',
  }}
>
  Update Share Skill
</Button>
</Form.Item>
</Form>
</Modal>
);
};