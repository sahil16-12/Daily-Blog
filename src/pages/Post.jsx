import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12">
      <Container>
        {/* "Go Back" Button */}
        <div className="mb-6">
          <Button
            bgColor="bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </Button>
        </div>

        {/* Post Content Card */}
        <div className="bg-white shadow-2xl rounded-xl p-8">
          <div className="relative border rounded-xl overflow-hidden">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="w-full h-auto rounded-xl object-cover"
            />
            {isAuthor && (
              <div className="absolute top-4 right-4 flex gap-2">
                {/* Edit Button */}
                <Link to={`/edit-post/${post.$id}`}>
                  <Button bgColor="bg-yellow-500 hover:bg-yellow-600 text-white">
                    Edit
                  </Button>
                </Link>
                {/* Delete Button */}
                <Button
                  bgColor="bg-gray-700 hover:bg-gray-800 text-white"
                  onClick={deletePost}
                >
                  Delete
                </Button>
              </div>
            )}
          </div>
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {post.title}
            </h1>
            <div className="prose max-w-full text-gray-700">
              {parse(post.content)}
            </div>
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}
