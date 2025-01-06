"use client"
import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GlareCard } from "../ui/glare-card";
import { IconSchool, IconBriefcase, IconAppWindow } from "@tabler/icons-react"; // Importing icons

export function GlareCardDemo() {
  // Animation Variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 }, // Initial state
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }, // Scroll reveal
    wiggle: {
      rotate: [0, -5, 5, -5, 0], // Small wiggle animation
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  // Intersection Observer Hook
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div className="p-6">
      {/* "Why Choose Us" Heading */}
      <h2 className="text-center font-bold text-6xl text-white mb-8" style={{ fontFamily: "'Royal Roboto', sans-serif" }}>
        Discover Why Our Program Stands Out</h2>


      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10">
        {/* Card 1 */}
        <motion.div
          ref={ref1}
          className="flex flex-col items-center justify-center text-center p-6"
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          whileHover="wiggle"
          variants={cardVariants}
        >
          <GlareCard className="flex flex-col items-center justify-center text-center p-6">
            <IconSchool className="h-10 w-10 text-white mb-4" /> {/* Icon */}
            <h3 className="font-bold text-white text-xl">Project-Based Learning</h3>
            <p className="font-normal text-neutral-200 text-base mt-4">
              Gain hands-on experience with real-world projects, advancing from basic to
              advanced editing techniques. You'll work on practical projects that prepare
              you for the challenges of the industry.
            </p>
          </GlareCard>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          ref={ref2}
          className="flex flex-col items-center justify-center text-center p-6"
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          whileHover="wiggle"
          variants={cardVariants}
        >
          <GlareCard className="flex flex-col items-center justify-center text-center p-6">
            <IconBriefcase className="h-10 w-10 text-white mb-4" /> {/* Icon */}
            <h3 className="font-bold text-white text-xl">Career Development</h3>
            <p className="font-normal text-neutral-200 text-base mt-4">
              We provide you with the tools to market yourself effectively as a video
              editor. Learn how to craft your personal brand and navigate the competitive
              job market to land your dream role.
            </p>
          </GlareCard>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          ref={ref3}
          className="flex flex-col items-center justify-center text-center p-6"
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          whileHover="wiggle"
          variants={cardVariants}
        >
          <GlareCard className="flex flex-col items-center justify-center text-center p-6">
            <IconAppWindow className="h-10 w-10 text-white mb-4" /> {/* Icon */}
            <h3 className="font-bold text-white text-xl">Real-World Application</h3>
            <p className="font-normal text-neutral-200 text-base mt-4">
              Focus on applying skills in real-life scenarios for industry experience while studying.
              Develop a strong portfolio to showcase your work to potential employers.
            </p>
          </GlareCard>
        </motion.div>
      </div>
    </div>
  );
}
