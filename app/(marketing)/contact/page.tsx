import { ContactForm } from "@/components/ContactForm";
export default function Page(){
  return (
    <section className="py-10">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-2 text-muted-foreground">Tell us about your task — we’ll propose next steps within 1 business day.</p>
      <div className="mt-6">
        <ContactForm />
      </div>
    </section>
  );
}
