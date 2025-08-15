import { revalidatePath } from "next/cache";

async function submit(formData: FormData){
  "use server";
  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    org: formData.get("org"),
    goal: formData.get("goal"),
    message: formData.get("message")
  };
  console.log("contact_submit", payload);
  // TODO: integrate email service; placeholder only
  revalidatePath("/contact");
}

export function ContactForm(){
  return (
    <form action={submit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input className="h-10 rounded-md border px-3" name="name" placeholder="Name" required />
        <input className="h-10 rounded-md border px-3" name="email" type="email" placeholder="Email" required />
      </div>
      <input className="h-10 w-full rounded-md border px-3" name="org" placeholder="Organization" />
      <select className="h-10 w-full rounded-md border px-3" name="goal">
        <option>Request a Template</option>
        <option>White-label</option>
        <option>Become a Publisher</option>
        <option>Consulting</option>
      </select>
      <textarea className="w-full rounded-md border p-3" name="message" rows={5} placeholder="Describe your task"></textarea>
      <button className="inline-flex h-10 items-center px-4 rounded-md bg-[--primary] text-[--primary-foreground] focus-visible:ring-2">Send</button>
      <p className="text-xs text-muted-foreground">We use your data only to respond.</p>
    </form>
  );
}
