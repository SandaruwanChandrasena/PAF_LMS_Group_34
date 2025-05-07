import React, { useState } from "react";
import { Card, Carousel, Button, Row, Col, Typography, Modal, Space } from "antd";
import { useSnapshot } from "valtio";
import { UploadOutlined } from "@ant-design/icons";
import state from "../../Utils/Store";
import { 
  EditOutlined, 
  DeleteOutlined, 
  ExpandOutlined,
  ShareAltOutlined,
  InfoCircleOutlined, 
  HeartOutlined,
  HeartFilled,
  MessageOutlined
} from "@ant-design/icons";
import SkillShareService from "../../Services/SkillShareService";

const { Title, Text, Paragraph } = Typography;

// Theme colors
const themeColors = {
  primary: "#FF6B35", // Bright and inviting orange
  secondary: "#FF8F1C", // Softer tangerine for a modern touch
  accent: "#FF4500", // Fresh red-orange for highlights
  background: "#FFF5E6", // Light orangeish-white for a clean look
  surface: "#FFF0D9", // Soft light orange for surfaces
  cardBg: "#FFFFFF", // White background for cards
  textPrimary: "#1E3A5F", // Deep navy for readability
  textSecondary: "#5A7184", // Muted blue-gray for secondary text
  border: "rgba(0, 0, 0, 0.12)", // Subtle neutral border
  hover: "#FF5733", // Slightly darker orange for hover effects
  danger: "#FF4D4F", // Friendly red for warnings
  success: "#28A745", // Balanced green for success messages
  gradient: "linear-gradient(135deg, #FF6B35 0%, #FF8F1C 100%)", // Light, engaging orange gradient
};

const SkillShareCard = ({ plan }) => {
  const snap = useSnapshot(state);
  const [deleteLoading, setIsDeleteLoading] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewMedia, setPreviewMedia] = useState({ url: '', type: 'image' });
  const [liked, setLiked] = useState(false);
  
  const deletePlan = async () => {
    try {
      setIsDeleteLoading(true);
      await SkillShareService.deleteSkillShare(plan.id);
      state.SkillShares = await SkillShareService.getAllSkillShares();
    } catch (error) {
      console.error("Error deleting skill sharing post:", error);
    } finally {
      setIsDeleteLoading(false);
    }
  };
  
  const handlePreview = (url, type) => {
    setPreviewMedia({ url, type });
    setPreviewVisible(true);
  };
 