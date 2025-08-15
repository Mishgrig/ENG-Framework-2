import { TemplateCard, type Template } from "@/components/TemplateCard";

const templates: Template[] = [
  {
    slug: "booking",
    title: "Service Booking",
    segment: "Business",
    tags: ["Booking","Payments","Notifications"],
    schema: { blocks:[
      { type:"text", props:{ text:"Book a service" } },
      { type:"input", props:{ placeholder:"Your name" } },
      { type:"input", props:{ placeholder:"Date & time" } },
      { type:"button", props:{ label:"Request Slot" } }
    ]}
  },
  {
    slug: "quiz",
    title: "Quizzes & Tests",
    segment: "Education",
    tags: ["Quizzes","Scores","Lessons"],
    schema: { blocks:[
      { type:"text", props:{ text:"Weekly quiz" } },
      { type:"button", props:{ label:"Start" } }
    ]}
  },
  {
    slug: "civic-survey",
    title: "Civic Survey",
    segment: "Municipal",
    tags: ["Forms","Lists","Broadcast"],
    schema: { blocks:[
      { type:"text", props:{ text:"City survey" } },
      { type:"input", props:{ placeholder:"Your district" } },
      { type:"button", props:{ label:"Submit" } }
    ]}
  }
];

export default function Page(){
  return (
    <section className="py-10">
      <h1 className="text-3xl font-semibold">Templates Library</h1>
      <p className="mt-2 text-muted-foreground">Ready-to-adapt Mini Apps for common scenarios.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map(t => <TemplateCard key={t.slug} t={t} />)}
      </div>
    </section>
  );
}
