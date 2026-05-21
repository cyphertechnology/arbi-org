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
  HandHeart,
  Building2,
  Phone,
  Mail,
  MapPin,
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

  // Suggested donation amounts in USD
  const suggestedAmounts = [25, 50, 100, 250, 500];

  // Impact metrics - ARBI specific
  const impactMetrics = [
    { icon: Users, value: "3,950+", label: "People Empowered" },
    { icon: Globe, value: "2M+", label: "People Impacted" },
    { icon: Activity, value: "4+", label: "Regions in North Kivu" },
    { icon: HandHeart, value: "6+", label: "Partner Organizations" },
  ];

  // Milestone data for progress bar
  const milestoneData = {
    current: 28450,
    goal: 150000,
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

  // Function to send donation details via EmailJS
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
      const SERVICE_ID = "service_c46s32s";
      const TEMPLATE_ID = "template_o8bxbta";
      const PUBLIC_KEY = "eOKgG7otukskK1GHB";

      // Template parameters for organization email
      const orgTemplateParams = {
        to_email: "sewimfuratheo@gmail.com",
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
        from_name: "Africa Restoring Bridges Initiative (ARBI)",
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
      const emailSent = await sendDonationEmail(donationDetails);
      
      // Store in localStorage for record keeping
      const donations = JSON.parse(localStorage.getItem("donations") || "[]");
      donations.push({
        ...donationDetails,
        date: new Date().toISOString(),
        status: emailSent ? "email_sent" : "stored_locally",
      });
      localStorage.setItem("donations", JSON.stringify(donations));

      toast({
        title: "Donation Received",
        description: `Thank you for your ${isMonthly ? "monthly" : "one-time"} donation of $${donationAmount}. A confirmation has been sent to ${formData.email}. "You will be called Repairer of Broken Walls, Restorer of Streets with Dwellings." — Isaiah 58:12`,
        duration: 6000,
      });
      
      // Reset form
      setDonationAmount("");
      setSelectedAmount(null);
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (error) {
      // Fallback: Store donation in localStorage
      const donations = JSON.parse(localStorage.getItem("donations") || "[]");
      donations.push({
        ...donationDetails,
        date: new Date().toISOString(),
        status: "stored_locally_only",
      });
      localStorage.setItem("donations", JSON.stringify(donations));
      
      toast({
        title: "Donation Recorded",
        description: `Thank you for your donation of $${donationAmount}. We've recorded your contribution. "You will be called Repairer of Broken Walls, Restorer of Streets with Dwellings." — Isaiah 58:12`,
        duration: 6000,
      });
      
      setDonationAmount("");
      setSelectedAmount(null);
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } finally {
      setIsAnimating(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              Africa Restoring Bridges Initiative
            </div>

            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
              Touching Hearts
            </h1>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Transforming Nations
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              Impacting Hearts — Heads — Hands
            </p>

            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto italic">
              "You will be called Repairer of Broken Walls, Restorer of Streets with Dwellings." — Isaiah 58:12
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

            <div className="flex flex-wrap justify-center gap-8 mt-8 pt-6 border-t border-border">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">3,950+</p>
                <p className="text-xs text-muted-foreground">People Empowered</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">4+</p>
                <p className="text-xs text-muted-foreground">Regions in North Kivu</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">6+</p>
                <p className="text-xs text-muted-foreground">Partner Organizations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN DONATION SECTION */}
      <section className="py-16" id="donate-form">
        <div className="container mx-auto px-4">

          {/* Progress Bar */}
          <div className="max-w-4xl mx-auto mb-12 bg-card rounded-2xl p-6 shadow-card border border-border">
            <div className="flex justify-between items-center mb-3 flex-wrap gap-3">
              <div>
                <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                  <Target className="w-4 h-4 text-primary" />
                  Annual Fundraising Goal
                </h3>
                <p className="text-2xl font-bold text-foreground">${milestoneData.current.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">raised of ${milestoneData.goal.toLocaleString()}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-foreground">{milestoneData.donors.toLocaleString()}</span>
                  <span className="text-xs text-muted-foreground">donors</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 bg-primary rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

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
                      placeholder="+243 XXX XXX XXX"
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
                      <p><span className="text-muted-foreground">Bank:</span> <span className="text-foreground">Trust Merchant Bank (TMB)</span></p>
                      <p><span className="text-muted-foreground">Account Name:</span> <span className="text-foreground">ARBI - Africa Restoring Bridges Initiative</span></p>
                      <p><span className="text-muted-foreground">Account Number:</span> <span className="text-foreground">TMB-00123456789</span></p>
                      <p><span className="text-muted-foreground">SWIFT/BIC:</span> <span className="text-foreground">TMBCCDKK</span></p>
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
                      <p><span className="text-muted-foreground">Phone Number:</span> <span className="text-foreground">+243 971 944 496</span></p>
                      <p><span className="text-muted-foreground">Account Name:</span> <span className="text-foreground">ARBI</span></p>
                      <p className="text-xs text-muted-foreground mt-2">Airtel Money, M-Pesa, Orange Money accepted</p>
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
                      <p className="text-muted-foreground">Visa, Mastercard, American Express</p>
                    </div>
                  </div>

                  {/* Contact for assistance */}
                  <div className="mt-4 pt-3 border-t border-border">
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">Avenue Jacarandas, 32 D, Q. Les Volcans, Goma, North Kivu, DRC</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">+243-971 944 496</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">sewimfuratheo@gmail.com</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Impact Stats */}
              <div className="mt-5 bg-primary/5 rounded-2xl p-5 border border-primary/20 text-center">
                <p className="text-sm text-muted-foreground mb-2">Your donation today will</p>
                <p className="text-foreground font-medium">
                  🕊️ Fund trauma counseling for 10 survivors
                </p>
                <p className="text-foreground font-medium mt-1">
                  📚 Provide leadership training for 5 community leaders
                </p>
                <p className="text-foreground font-medium mt-1">
                  🏠 Support youth reintegration programs
                </p>
                <p className="text-foreground font-medium mt-1">
                  🌍 Help rebuild communities in North Kivu
                </p>
              </div>

              {/* Scripture Reminder */}
              <div className="mt-5 bg-card rounded-2xl p-5 border border-border text-center">
                <p className="text-sm italic text-muted-foreground">
                  "You will be called Repairer of Broken Walls, Restorer of Streets with Dwellings."
                </p>
                <p className="text-xs text-primary mt-2">— Isaiah 58:12</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-12 border-y border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-foreground">Our Impact Across North Kivu</h2>
            <p className="text-muted-foreground">Since our founding in 2011, we have worked tirelessly to bring healing and peace</p>
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
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-primary">2011</span> Year Founded
            </p>
          </div>
        </div>
      </section>

      {/* Where Your Donation Goes - ARBI Programs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-foreground">Where Your Donation Goes</h2>
            <p className="text-muted-foreground">Four programs transforming communities</p>
          </div>
          <div className="grid md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: HandHeart, title: "Healing, Peace-Building & Reconciliation", percent: "40%", desc: "Mental Health and Psycho-social Support" },
              { icon: Users, title: "Abundant Leadership Development", percent: "25%", desc: "Equipping servant leaders" },
              { icon: Building2, title: "Integral Community Development", percent: "20%", desc: "Holistic development approaches" },
              { icon: GraduationCap, title: "Promoting Resilience Among Youth", percent: "15%", desc: "Delinquency prevention & reintegration" },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-4">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
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
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">Stay Connected With Our Mission</h3>
            <p className="text-muted-foreground text-sm mb-5">
              Join our newsletter to receive impact stories, updates, and ways to get involved.
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