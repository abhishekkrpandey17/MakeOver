import React from "react";
import Image from "next/image";

interface BlogCardProps {
  category: string;
  date: string;
  title: string;
  author: string;
  avatar: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ category, date, title, author, avatar, image }) => {
  return (
    <div className="bg-[#f4e9f9] p-4 rounded-xl shadow-sm hover:shadow-md transition-all w-full max-w-sm">
      <div className="rounded-xl overflow-hidden">
        <Image src={image} alt={title} width={400} height={200} className="w-full object-cover" />
      </div>
      <div className="mt-3 text-sm text-[#6c6374] flex items-center gap-2">
        <span className="bg-[#dbc3eb] text-[#933194] px-2 py-1 rounded-full text-xs">{category}</span>
        <span>{date}</span>
      </div>
      <h3 className="text-[#171619] font-semibold mt-2">{title}</h3>
      <div className="mt-1 text-sm text-[#6c6374] flex items-center gap-2">
        <Image src={avatar} alt={author} width={24} height={24} className="rounded-full" />
        <span>{author}</span>
      </div>
    </div>
  );
};

export default BlogCard;
