import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModernEqualizer } from "@/components/ModernEqualizer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "../contexts/AuthContext";
import { BookingModal } from "../components/BookingModal";
import {
  Clock,
  MapPin,
  Users,
  Star,
  Music,
  Headphones,
  Volume2,
  ArrowRight,
  DollarSign,
  GraduationCap,
  Award,
  PlayCircle,
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  format: string;
  price: number;
  currency: string;
  studentsEnrolled: number;
  maxStudents: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: "Mixing" | "Production" | "Business" | "Equipment" | "Performance";
  description: string;
  image: string;
  rating: number;
  lessons: number;
  certificate: boolean;
}

export default function Courses() {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const courses: Course[] = [
    {
      id: "1",
      title: "DJ Mixing Fundamentals",
      instructor: "Marcus Rodriguez",
      duration: "8 weeks",
      format: "Online + Live Sessions",
      price: 299,
      currency: "USD",
      studentsEnrolled: 847,
      maxStudents: 1000,
      level: "Beginner",
      category: "Mixing",
      description:
        "Master the fundamentals of DJ mixing including beatmatching, EQ, transitions, and reading the crowd. Perfect for complete beginners.",
      image: "/placeholder.svg",
      rating: 4.8,
      lessons: 24,
      certificate: true,
    },
    {
      id: "2",
      title: "Advanced Turntablism Mastery",
      instructor: "DJ Luna",
      duration: "12 weeks",
      format: "In-Person + Online",
      price: 599,
      currency: "USD",
      studentsEnrolled: 234,
      maxStudents: 300,
      level: "Advanced",
      category: "Performance",
      description:
        "Learn advanced scratch techniques, beat juggling, and turntable tricks from world champion DJ Luna. Includes live practice sessions.",
      image: "/placeholder.svg",
      rating: 4.9,
      lessons: 36,
      certificate: true,
    },
    {
      id: "3",
      title: "Electronic Music Production",
      instructor: "Alex Waves",
      duration: "10 weeks",
      format: "Online",
      price: 449,
      currency: "USD",
      studentsEnrolled: 623,
      maxStudents: 800,
      level: "Intermediate",
      category: "Production",
      description:
        "Create professional electronic tracks using industry-standard software. Learn synthesis, arrangement, and mixing for electronic music.",
      image: "/placeholder.svg",
      rating: 4.7,
      lessons: 30,
      certificate: true,
    },
    {
      id: "4",
      title: "DJ Equipment Masterclass",
      instructor: "Tech Mike",
      duration: "6 weeks",
      format: "Online",
      price: 199,
      currency: "USD",
      studentsEnrolled: 412,
      maxStudents: 500,
      level: "Beginner",
      category: "Equipment",
      description:
        "Everything you need to know about DJ equipment - from mixers and turntables to controllers and software setup.",
      image: "/placeholder.svg",
      rating: 4.6,
      lessons: 18,
      certificate: false,
    },
    {
      id: "5",
      title: "Mobile DJ Business Bootcamp",
      instructor: "Sarah Martinez",
      duration: "8 weeks",
      format: "Online + Mentorship",
      price: 799,
      currency: "USD",
      studentsEnrolled: 189,
      maxStudents: 250,
      level: "Intermediate",
      category: "Business",
      description:
        "Build a successful mobile DJ business with marketing strategies, client management, pricing, and legal considerations.",
      image: "/placeholder.svg",
      rating: 4.8,
      lessons: 32,
      certificate: true,
    },
    {
      id: "6",
      title: "Hip-Hop DJ Techniques",
      instructor: "DJ Rhythm",
      duration: "6 weeks",
      format: "In-Person",
      price: 399,
      currency: "USD",
      studentsEnrolled: 156,
      maxStudents: 200,
      level: "Advanced",
      category: "Performance",
      description:
        "Master hip-hop specific techniques including scratching, sampling, beat juggling, and party rocking skills.",
      image: "/placeholder.svg",
      rating: 4.9,
      lessons: 24,
      certificate: true,
    },
  ];

  const categories = [
    "All",
    "Mixing",
    "Production",
    "Business",
    "Equipment",
    "Performance",
  ];

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-50 text-green-600 border-green-200";
      case "Intermediate":
        return "bg-yellow-50 text-yellow-600 border-yellow-200";
      case "Advanced":
        return "bg-red-50 text-red-600 border-red-200";
      default:
        return "bg-gray-50 text-gray-600 border-gray-200";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Mixing":
        return <Headphones className="w-4 h-4" />;
      case "Production":
        return <Volume2 className="w-4 h-4" />;
      case "Business":
        return <Award className="w-4 h-4" />;
      case "Equipment":
        return <Music className="w-4 h-4" />;
      case "Performance":
        return <PlayCircle className="w-4 h-4" />;
      default:
        return <GraduationCap className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] overflow-hidden bg-black -mt-16 pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F04a79369a30d4d69bd5ac30aac5e71b7%2Fae1b6f21497a432c9114d09caf330e17?format=webp&width=800"
            alt="DJ Course Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Modern Equalizer Background */}
        <div className="absolute inset-0 flex items-end justify-center opacity-30 pb-32">
          <div className="scale-150">
            <ModernEqualizer />
          </div>
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32 min-h-[60vh] flex items-center z-10">
          <div className="text-center w-full">
            <div className="space-y-8 text-white">
              <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/20 mx-auto backdrop-blur-sm">
                <GraduationCap className="w-3 h-3 mr-1" />
                Professional DJ Education
              </Badge>

              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight drop-shadow-lg max-w-4xl mx-auto">
                  <span className="block text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-2 tracking-wide">
                    Custom solutions at any scale
                  </span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                    one plan, zero stress
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-60"></div>
                  </span>
                </h1>
                <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                  Learn from industry professionals with our comprehensive courses.
                  From beginner basics to advanced techniques, we have everything you need to succeed.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 font-semibold shadow-xl backdrop-blur-sm"
                >
                  <PlayCircle className="w-5 h-5 mr-2 text-black" />
                  Browse Courses
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-white/10 backdrop-blur-sm shadow-lg"
                >
                  <Users className="w-5 h-5 mr-2 text-black" />
                  Meet Instructors
                </Button>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Courses Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-black">
            Learning Paths for Every{" "}
            <span className="underline decoration-4 underline-offset-8">
              Level & Goal
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Select from our range of specialized courses designed for every skill level
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.slice(0, 3).map((course) => (
            <Card
              key={course.id}
              className="bg-white border-gray-200 hover:border-black transition-all duration-300 group shadow-lg"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                  <Badge className="bg-gray-100 text-black border-gray-200">
                    {getCategoryIcon(course.category)}
                    <span className="ml-1">{course.category}</span>
                  </Badge>
                </div>

                <CardTitle className="text-xl text-black group-hover:text-gray-700 transition-colors">
                  {course.title}
                </CardTitle>

                <CardDescription className="text-gray-600">
                  with {course.instructor}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-black" />
                    {course.duration} • {course.lessons} lessons
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-black" />
                    {course.format}
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-black" />
                    {course.studentsEnrolled} students enrolled
                  </div>

                  {course.certificate && (
                    <div className="flex items-center text-sm text-green-600">
                      <Award className="w-4 h-4 mr-2" />
                      Certificate included
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-black text-black" />
                    <span className="text-sm font-medium text-black">{course.rating}</span>
                    <span className="text-xs text-gray-600">
                      ({course.studentsEnrolled})
                    </span>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-bold text-black">
                      ${course.price}
                    </div>
                    <div className="text-xs text-gray-600">
                      one-time payment
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full bg-black text-white hover:bg-gray-800 font-semibold"
                  onClick={() => {
                    setSelectedCourse(course);
                    setBookingModalOpen(true);
                  }}
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* Booking Modal */}
        <BookingModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          item={
            selectedCourse
              ? {
                  id: selectedCourse.id,
                  title: selectedCourse.title,
                  instructor: selectedCourse.instructor,
                  duration: selectedCourse.duration,
                  location: selectedCourse.format,
                  price: selectedCourse.price,
                  type: "course",
                }
              : null
          }
        />
        </div>
      </section>
    </div>
  );
}
