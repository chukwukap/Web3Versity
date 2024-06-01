export interface CourseResource {
  video: boolean;
  quizzes: boolean;
  games: boolean;
  codingChallenges: boolean;
}

export interface Course {
  title: string;
  description: string;
  courseOutline: string[];
  resources: CourseResource;
}
