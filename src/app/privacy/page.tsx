import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-montserrat font-extrabold text-white mb-8 uppercase tracking-tight">Privacy Policy</h1>
        <div className="space-y-6 text-on-surface-variant leading-relaxed">
          <p>Effective Date: May 30, 2026</p>
          <p>At ENSEW Services Limited, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
          <h2 className="text-2xl font-montserrat font-bold text-white mt-12 uppercase tracking-widest">1. Data We Collect</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: Identity Data, Contact Data, Technical Data, and Usage Data.</p>
          <h2 className="text-2xl font-montserrat font-bold text-white mt-12 uppercase tracking-widest">2. How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to perform the contract we are about to enter into or have entered into with you.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
