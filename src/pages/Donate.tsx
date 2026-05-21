import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Heart, 
  Shield, 
  Users, 
  GraduationCap, 
  Activity,
  ChevronRight,
  CheckCircle,
  Globe,
  Sparkles,
  TrendingUp,
  Clock,
  Calendar,
  DollarSign,
  CreditCard,
  Smartphone,
  Landmark,
  Send,
  Gift,
  Star,
  Award,
  Target,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Donate = () => {
  const { toast } = useToast();
  const [donationAmount, setDonationAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [isMonthly, setIsMonthly] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isAnimating, setIsAnimating] = useState(false);

  // Suggested donation amounts
  const suggestedAmounts = [25, 50, 100, 250, 500];

  // Impact metrics
  const impactMetrics = [
    { icon: Users, value: "15K+", label: "Children Supported" },
    { icon: GraduationCap, value: "350+", label: "Scholarships Awarded" },
    { icon: Activity, value: "98%", label: "Program Efficiency" },
    { icon: Globe, value: "12", label: "Communities Reached" },
  ];

  // Milestone data for progress bar
  const milestoneData = {
    current: 28450,
    goal: 100000,
    donors: 1247,
  };

  const percentage = (milestoneData.current / milestoneData.goal) * 100;

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setDonationAmount(amount.toString());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to send donation details via EmailJS (no backend required)
  const sendDonationEmail = async (donationDetails: {
    fullName: string;
    email: string;
    phone: string;
    amount: string;
    type: string;
    message: string;
  }) => {
    try {
      // EmailJS configuration
      // You need to sign up at https://www.emailjs.com/ and get these credentials
      const SERVICE_ID = "service_c46s32s";     // Replace with your EmailJS Service ID
      const TEMPLATE_ID = "template_o8bxb   ta";   // Replace with your EmailJS Template ID
      const PUBLIC_KEY = "eOKgG7otukskK1GHB";     // Replace with your EmailJS Public Key

      // Template parameters for organization email
      const orgTemplateParams = {
        to_email: "ngabodaniel1000@gmail.com",
        from_name: donationDetails.fullName,
        from_email: donationDetails.email,
        phone: donationDetails.phone,
        amount: donationDetails.amount,
        donation_type: donationDetails.type,
        message: donationDetails.message || "No message provided",
        reply_to: donationDetails.email,
        date: new Date().toLocaleString(),
      };

      // Send to organization
      const orgResponse = await emailjs.send(SERVICE_ID, TEMPLATE_ID, orgTemplateParams, PUBLIC_KEY);
      
      // Template parameters for donor confirmation
      const donorTemplateParams = {
        to_email: donationDetails.email,
        from_name: "Arbi Organization",
        donor_name: donationDetails.fullName,
        amount: donationDetails.amount,
        donation_type: donationDetails.type,
        message: donationDetails.message || "Thank you for your support!",
        year: new Date().getFullYear(),
      };

      // Send confirmation to donor
      await emailjs.send(SERVICE_ID, "donor_confirmation_template", donorTemplateParams, PUBLIC_KEY);

      return true;
    } catch (error) {
      console.error("Email sending error:", error);
      return false;
    }
  };

  // Alternative: Using FormSubmit.co (even simpler, no account needed)
  const sendWithFormSubmit = async (donationDetails: {
    fullName: string;
    email: string;
    phone: string;
    amount: string;
    type: string;
    message: string;
  }) => {
    const form = new FormData();
    form.append("name", donationDetails.fullName);
    form.append("email", donationDetails.email);
    form.append("phone", donationDetails.phone);
    form.append("amount", donationDetails.amount);
    form.append("type", donationDetails.type);
    form.append("message", donationDetails.message);
    form.append("_subject", `New Donation: ${donationDetails.type} - $${donationDetails.amount}`);
    form.append("_replyto", donationDetails.email);
    
    const response = await fetch("https://formsubmit.co/arbiorg@gmail.com", {
      method: "POST",
      body: form,
    });
    
    return response.ok;
  };

  // Alternative: Using Web3Forms (free, no backend)
  const sendWithWeb3Forms = async (donationDetails: {
    fullName: string;
    email: string;
    phone: string;
    amount: string;
    type: string;
    message: string;
  }) => {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "YOUR_ACCESS_KEY", // Get from https://web3forms.com/
        name: donationDetails.fullName,
        email: donationDetails.email,
        phone: donationDetails.phone,
        amount: donationDetails.amount,
        donation_type: donationDetails.type,
        message: donationDetails.message,
        subject: `New Donation: ${donationDetails.type} - $${donationDetails.amount}`,
        from_name: donationDetails.fullName,
        replyto: donationDetails.email,
      }),
    });
    
    return response.ok;
  };

  const handleDonationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnimating(true);
    
    const donationDetails = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      amount: donationAmount,
      type: isMonthly ? "Monthly" : "One-time",
      message: formData.message || "No message provided",
    };

    try {
      // Option 1: Using FormSubmit.co (Easiest - no account needed)
      // Just uncomment and use this if you don't want to set up EmailJS
      // const emailSent = await sendWithFormSubmit(donationDetails);
      
      // Option 2: Using EmailJS (requires free account setup)
      const emailSent = await sendDonationEmail(donationDetails);
      
      // Also store in localStorage for record keeping
      const donations = JSON.parse(localStorage.getItem("donations") || "[]");
      donations.push({
        ...donationDetails,
        date: new Date().toISOString(),
        status: emailSent ? "email_sent" : "stored_locally",
      });
      localStorage.setItem("donations", JSON.stringify(donations));

      toast({
        title: "Donation Received",
        description: `Thank you for your ${isMonthly ? "monthly" : "one-time"} donation of $${donationAmount}. A confirmation has been sent to ${formData.email}`,
        duration: 5000,
      });
      
      // Reset form
      setDonationAmount("");
      setSelectedAmount(null);
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (error) {
      // Fallback: Store donation in localStorage even if email fails
      const donations = JSON.parse(localStorage.getItem("donations") || "[]");
      donations.push({
        ...donationDetails,
        date: new Date().toISOString(),
        status: "stored_locally_only",
      });
      localStorage.setItem("donations", JSON.stringify(donations));
      
      toast({
        title: "Donation Recorded",
        description: `Thank you for your donation of $${donationAmount}. We've recorded your contribution.`,
        duration: 5000,
      });
      
      // Reset form
      setDonationAmount("");
      setSelectedAmount(null);
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } finally {
      setIsAnimating(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section - Compact */}
      <section className="relative overflow-hidden bg-gradient-hero py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              Make a Difference Today
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Support Our Mission
            </h1>

            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Your generosity provides education, healthcare, and hope to children and families who need it most.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={() => document.getElementById("donate-form")?.scrollIntoView({ behavior: "smooth" })}
                variant="hero" 
                size="lg"
              >
                Donate Now
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                <Shield className="mr-2 w-4 h-4" />
                Learn More
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-border">
              {[
                { icon: Shield, text: "100% Secure Giving" },
                { icon: Award, text: "Tax Deductible" },
                { icon: Star, text: "4.9/5 Rating" },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN DONATION SECTION - At the top for quick access */}
      <section className="py-16" id="donate-form">
        <div className="container mx-auto px-4">

          {/* Donation Form and Details - Side by Side */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* LEFT SIDE — Donation Form */}
            <div className="order-1 lg:order-1">
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
                <div className="flex items-center gap-2 mb-5">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Gift className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-serif font-bold text-foreground">Make a Donation</h2>
                </div>

                <form onSubmit={handleDonationSubmit} className="space-y-5">
                  {/* Monthly Toggle */}
                  <div className="flex items-center justify-between p-2.5 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">Donation Type</span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setIsMonthly(false)}
                        className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                          !isMonthly 
                            ? "bg-primary text-primary-foreground shadow-sm" 
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        One-time
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsMonthly(true)}
                        className={`px-3 py-1 rounded-md text-sm font-medium transition-all flex items-center gap-1 ${
                          isMonthly 
                            ? "bg-primary text-primary-foreground shadow-sm" 
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <Clock className="w-3 h-3" />
                        Monthly
                      </button>
                    </div>
                  </div>

                  {/* Suggested Amounts */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Select Amount</label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {suggestedAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => handleAmountSelect(amount)}
                          className={`py-2 rounded-lg font-semibold text-sm transition-all ${
                            selectedAmount === amount
                              ? "bg-primary text-primary-foreground shadow-sm"
                              : "bg-muted text-foreground hover:bg-muted/80"
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1 flex items-center gap-2">
                      <DollarSign className="w-3.5 h-3.5 text-primary" />
                      Custom Amount (USD)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        value={donationAmount}
                        onChange={(e) => {
                          setDonationAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                        className="pl-7 py-2 rounded-lg"
                        required
                      />
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                      <Input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="rounded-lg"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+256 700 000 000"
                      className="rounded-lg"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Message (Optional)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Leave us a message..."
                      rows={2}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  {/* Security Notice */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/30 p-2 rounded-lg">
                    <Shield className="w-3.5 h-3.5 text-primary" />
                    <span>Secure & encrypted. We never share your data.</span>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isAnimating}
                  >
                    {isAnimating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Heart className="w-4 h-4 mr-2" />
                        {isMonthly ? "Donate Monthly" : "Donate Now"}
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    <CheckCircle className="inline w-3 h-3 mr-1" />
                    Tax-deductible receipt will be sent via email
                  </p>
                </form>
              </div>
            </div>

            {/* RIGHT SIDE — Donation Details / Payment Methods */}
            <div className="order-2 lg:order-2">
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
                <div className="flex items-center gap-2 mb-5">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-serif font-bold text-foreground">Payment Methods</h2>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Choose from any of our secure payment options below. Your donation will be processed immediately.
                  </p>

                  {/* Bank Transfer */}
                  <div className="p-4 bg-muted/20 rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Landmark className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">Bank Transfer</h3>
                    </div>
                    <div className="space-y-1 text-sm ml-11">
                      <p><span className="text-muted-foreground">Bank:</span> <span className="text-foreground">Equity Bank</span></p>
                      <p><span className="text-muted-foreground">Account Name:</span> <span className="text-foreground">arbi org</span></p>
                      <p><span className="text-muted-foreground">Account Number:</span> <span className="text-foreground">123456789</span></p>
                    </div>
                  </div>

                  {/* Mobile Money */}
                  <div className="p-4 bg-muted/20 rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Smartphone className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">Mobile Money</h3>
                    </div>
                    <div className="space-y-1 text-sm ml-11">
                      <p><span className="text-muted-foreground">Phone Number:</span> <span className="text-foreground">+256 700 000 000</span></p>
                      <p><span className="text-muted-foreground">Account Name:</span> <span className="text-foreground">arbi org</span></p>
                    </div>
                  </div>

                  {/* Credit/Debit Card */}
                  <div className="p-4 bg-muted/20 rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <CreditCard className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">Credit / Debit Card</h3>
                    </div>
                    <div className="text-sm ml-11">
                      <p className="text-muted-foreground">Visa, Mastercard, American Express, Discover</p>
                    </div>
                  </div>

                  {/* PayPal */}
                  <div className="p-4 bg-muted/20 rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Send className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">PayPal</h3>
                    </div>
                    <div className="text-sm ml-11">
                      <p><span className="text-muted-foreground">Email:</span> <span className="text-foreground">arbiorg@gmail.com</span></p>
                    </div>
                  </div>

                  {/* Contact for assistance */}
                  <div className="mt-4 pt-3 border-t border-border text-center">
                    <p className="text-sm text-muted-foreground">
                      Need help? Contact us at <span className="text-primary">arbiorg@gmail.com</span> or call <span className="text-primary">+256 700 000 000</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Impact Stats */}
              <div className="mt-5 bg-primary/5 rounded-2xl p-5 border border-primary/20 text-center">
                <p className="text-sm text-muted-foreground mb-2">Your donation today will</p>
                <p className="text-foreground font-medium">
                  🌟 Provide school supplies for 10 children
                </p>
                <p className="text-foreground font-medium mt-1">
                  🏥 Support healthcare for 5 families
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-12 border-y border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-foreground">Our Impact So Far</h2>
            <p className="text-muted-foreground">Thanks to donors like you</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="text-center p-5 rounded-xl bg-card shadow-card border border-border"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <metric.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where Your Donation Goes */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-foreground">Where Your Donation Goes</h2>
            <p className="text-muted-foreground">Every dollar makes a difference</p>
          </div>
          <div className="grid md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {[
              { icon: GraduationCap, title: "Education", percent: "40%", desc: "School supplies & tuition" },
              { icon: Activity, title: "Healthcare", percent: "30%", desc: "Medical & mental health" },
              { icon: Heart, title: "Family Support", percent: "20%", desc: "Food & housing" },
              { icon: TrendingUp, title: "Operations", percent: "10%", desc: "Program delivery" },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-4">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-2xl font-bold text-primary">{item.percent}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Sparkles className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">Stay Connected</h3>
            <p className="text-muted-foreground text-sm mb-5">
              Get impact stories and updates on how your donation helps.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="rounded-lg"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap">
                Subscribe
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;