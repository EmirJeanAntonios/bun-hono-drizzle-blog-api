import { db } from "./db";
import * as schema from "./schemas/blogSchema";
import { userSchema } from "./schemas";

await db.insert(userSchema.users).values([
  {
    email: "emir@emir.test",
    password: "$argon2id$v=19$m=65536,t=2,p=1$jJCLP7TWZ6t6ZCbSo4zpKm1rv00Y1bnss6k7CQR9SC8$hK4qVT407OcNwJ6slCj4WvQbC4EvsRqPLV+4NuHAC5M",
    username: "emir",
    name: "Emir Antonios",
  },
]);


await db.insert(schema.blogs).values([
  {
    title: "The Art of Time Management",
    content:
      "Time management is crucial for achieving success in both personal and professional endeavors. Start by prioritizing your tasks and setting realistic goals. Use tools such as calendars, to-do lists, and time-tracking apps to stay organized and focused. Learn to delegate tasks when necessary and avoid multitasking, as it can lead to decreased productivity. With effective time management skills, you can accomplish more in less time and enjoy a greater sense of fulfillment.",
    author: "Michael Brown",
    description:
      "Master the art of managing your time effectively to increase productivity and reduce stress.",
    created_at: "2022-01-01",
    updated_at: "2022-01-01",
  },
  {
    title: "Healthy Eating Habits for a Balanced Life",
    description:
      "Discover the importance of nutrition and how to develop healthy eating habits for a better lifestyle.",
    author: "Emily Johnson",
    created_at: "2024-02-20",
    updated_at: "2024-02-25",
    image: "https://example.com/images/healthy_eating.jpg",
    content:
      "Eating a balanced diet is essential for maintaining good health. Focus on incorporating a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats into your meals. Avoid processed foods and excessive sugar and sodium intake. By making mindful food choices and practicing portion control, you can nourish your body and feel energized throughout the day.",
  },
  {
    title: "The Power of Positive Thinking",
    description:
      "Discover the transformative effects of maintaining a positive mindset in your daily life.",
    author: "Jane Doe",
    created_at: "2024-01-15",
    updated_at: "2024-01-20",
    image: "https://example.com/images/positive_thinking.jpg",
    content:
      "Positive thinking can have a profound impact on your life. It can improve your mood, reduce stress levels, and even enhance your overall health. By focusing on the bright side of situations and maintaining an optimistic outlook, you can overcome challenges more effectively and achieve your goals with greater ease.",
  },
  {
    title: "Exploring Meditation Techniques",
    description:
      "Learn about various meditation practices and how they can benefit your mental and physical well-being.",
    author: "John Smith",
    created_at: "2024-02-03",
    updated_at: "2024-02-08",
    image: "https://example.com/images/meditation_techniques.jpg",
    content:
      "Meditation offers numerous benefits for both the mind and body. From reducing stress and anxiety to improving focus and clarity, regular meditation practice can enhance your overall well-being. Explore different meditation techniques such as mindfulness meditation, loving-kindness meditation, and body scan meditation to find the one that resonates most with you.",
  },
]);

console.log(`Seeding complete.`);
