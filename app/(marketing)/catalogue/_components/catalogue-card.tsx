import {
  CircleCheckIcon,
  CirclePlayIcon,
  CodeIcon,
  PencilIcon,
  TrophyIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Course } from "@/lib/types";
import React from "react";

export function CatalogExcerpt({ course }: { course: Course }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Course Outline</h3>
            <ul className="space-y-2 mt-2">
              {course.courseOutline.map((outline) => (
                <li key={outline}>
                  <CircleCheckIcon className="w-5 h-5 text-green-500 inline-block mr-2" />
                  {outline}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Learning Resources</h3>
            <ul className="space-y-2 mt-2">
              {course.resources.video && (
                <li>
                  <CirclePlayIcon className="w-5 h-5 text-blue-500 inline-block mr-2" />
                  Video Lectures
                </li>
              )}
              {course.resources.quizzes && (
                <li>
                  <PencilIcon className="w-5 h-5 text-orange-500 inline-block mr-2" />
                  Interactive Quizzes
                </li>
              )}
              {course.resources.codingChallenges && (
                <li>
                  <CodeIcon className="w-5 h-5 text-purple-500 inline-block mr-2" />
                  Coding Challenges
                </li>
              )}
              {course.resources.quizzes && (
                <li>
                  <TrophyIcon className="w-5 h-5 text-yellow-500 inline-block mr-2" />
                  Gamified Learning
                </li>
              )}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Enroll Now</Button>
      </CardFooter>
    </Card>
  );
}
