import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { courseList } from "../mockdata";
import { CatalogExcerpt } from "./_components/catalogue-card";

export default function CataloguePage() {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Web3 Course Catalog</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Dive into the world of blockchain, dApps, smart contracts, and
            cryptocurrencies with our interactive learning resources.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseList.map((course) => (
            <CatalogExcerpt key={course.title} course={course} />
          ))}
        </div>
      </div>
    </main>
  );
}
