import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { motion } from "framer-motion";
import { containerVariants, itemVariants, cardHoverVariants, pulseVariants } from "@/lib/animationVariants";

// Import hero images for slideshow
// Import hero images for slideshow
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/20.jpg";
import img3 from "@/assets/3.jpg";
import img5 from "@/assets/5.jpg";
import img4 from "@/assets/21.jpg";
import img7 from "@/assets/7.jpg";
import img6 from "@/assets/19.jpg";

const HERO_IMAGES = [img1, img2, img3, img4, img5, img6, img7];

const Donate = () => {
  const navigate = useNavigate();
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  // Slideshow effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
      const SERVICE_ID = "service_c46s32s";
      const TEMPLATE_ID = "template_o8bxbta";
      const PUBLIC_KEY = "eOKgG7otukskK1GHB";

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

      const orgResponse = await emailjs.send(SERVICE_ID, TEMPLATE_ID, orgTemplateParams, PUBLIC_KEY);
      
      const donorTemplateParams = {
        to_email: donationDetails.email,
        from_name: "Africa Restoring Bridges Initiative (ARBI)",
        donor_name: donationDetails.fullName,
        amount: donationDetails.amount,
        donation_type: donationDetails.type,
        message: donationDetails.message || "Thank you for your support!",
        year: new Date().getFullYear(),
      };

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
      
      setDonationAmount("");
      setSelectedAmount(null);
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (error) {
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
      {/* Hero Section with Slideshow Background */}
      <motion.section 
        className="relative min-h-[550px] flex flex-col justify-center transition-all duration-1000 ease-in-out bg-fixed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ 
          backgroundImage: `url(${HERO_IMAGES[currentImageIndex]})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/65 transition-opacity duration-1000 ease-in-out"></div>
        
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            {/* <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="w-4 h-4" />
              Africa Restoring Bridges Initiative
            </motion.div> */}

            <motion.h1 
              className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Touching Hearts
            </motion.h1>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-serif text-primary mb-4  "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Transforming Nations
            </motion.h2>
            
            <motion.p 
              className="text-xl text-white/90 mb-4 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Impacting Hearts — Heads — Hands
            </motion.p>

            <motion.p 
              className="text-lg text-white/80 mb-6 max-w-2xl mx-auto italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              "You will be called Repairer of Broken Walls, Restorer of Streets with Dwellings." — Isaiah 58:12
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button 
                onClick={() => document.getElementById("donate-form")?.scrollIntoView({ behavior: "smooth" })}
                variant="hero" 
                size="lg"
              >
                Donate Now
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                onClick={() => navigate("/programs")}
                variant="outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              >
                <Shield className="mr-2 w-4 h-4" />
                Learn More
              </Button>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center gap-8 mt-8 pt-6 border-t border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">3,950+</p>
                <p className="text-xs text-white/80">People Empowered</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">4+</p>
                <p className="text-xs text-white/80">Regions in North Kivu</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">6+</p>
                <p className="text-xs text-white/80">Partner Organizations</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Slideshow indicator dots */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {HERO_IMAGES.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className="rounded-full transition-all"
              animate={{
                width: index === currentImageIndex ? 32 : 8,
                height: 8,
                backgroundColor: index === currentImageIndex ? "hsl(var(--primary))" : "rgba(255, 255, 255, 0.5)",
              }}
              transition={{ duration: 0.3 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </motion.section>

      {/* MAIN DONATION SECTION */}
      <section className="py-16" id="donate-form">
        <div className="container mx-auto px-4">

          {/* Progress Bar with Animation */}
          <motion.div 
            className="max-w-4xl mx-auto mb-12 bg-card rounded-2xl p-6 shadow-card border border-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
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
              <motion.div 
                className="absolute inset-y-0 left-0 bg-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>

          {/* Donation Form and Details - Side by Side */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* LEFT SIDE — Donation Form */}
            <motion.div 
              className="order-1 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
                <div className="flex items-center gap-2 mb-5">
                  <motion.div 
                    className="p-2 bg-primary/10 rounded-lg"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <Gift className="w-5 h-5 text-primary" />
                  </motion.div>
                  <h2 className="text-xl font-serif font-bold text-foreground">Make a Donation</h2>
                </div>

                <form onSubmit={handleDonationSubmit} className="space-y-5">
                  {/* Monthly Toggle */}
                  <motion.div 
                    className="flex items-center justify-between p-2.5 bg-muted/30 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">Donation Type</span>
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        type="button"
                        onClick={() => setIsMonthly(false)}
                        className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                          !isMonthly 
                            ? "bg-primary text-primary-foreground shadow-sm" 
                            : "bg-muted text-muted-foreground"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        One-time
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={() => setIsMonthly(true)}
                        className={`px-3 py-1 rounded-md text-sm font-medium transition-all flex items-center gap-1 ${
                          isMonthly 
                            ? "bg-primary text-primary-foreground shadow-sm" 
                            : "bg-muted text-muted-foreground"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Clock className="w-3 h-3" />
                        Monthly
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Suggested Amounts */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">Select Amount</label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {suggestedAmounts.map((amount, idx) => (
                        <motion.button
                          key={amount}
                          type="button"
                          onClick={() => handleAmountSelect(amount)}
                          className={`py-2 rounded-lg font-semibold text-sm transition-all ${
                            selectedAmount === amount
                              ? "bg-primary text-primary-foreground shadow-sm"
                              : "bg-muted text-foreground hover:bg-muted/80"
                          }`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          ${amount}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>

                  {/* Custom Amount */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
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
                  </motion.div>

                  {/* Form Fields */}
                  <motion.div 
                    className="grid sm:grid-cols-2 gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
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
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+243 XXX XXX XXX"
                      className="rounded-lg"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-1">Message (Optional)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Leave us a message..."
                      rows={2}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </motion.div>

                  {/* Security Notice */}
                  <motion.div 
                    className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/30 p-2 rounded-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Shield className="w-3.5 h-3.5 text-primary" />
                    <span>Secure & encrypted. We never share your data.</span>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
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
                  </motion.div>

                  <p className="text-center text-xs text-muted-foreground">
                    <CheckCircle className="inline w-3 h-3 mr-1" />
                    Tax-deductible receipt will be sent via email
                  </p>
                </form>
              </div>
            </motion.div>

            {/* RIGHT SIDE — Donation Details / Payment Methods */}
            <motion.div 
              className="order-2 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
                <div className="flex items-center gap-2 mb-5">
                  <motion.div 
                    className="p-2 bg-primary/10 rounded-lg"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <CreditCard className="w-5 h-5 text-primary" />
                  </motion.div>
                  <h2 className="text-xl font-serif font-bold text-foreground">Payment Methods</h2>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Choose from any of our secure payment options below. Your donation will be processed immediately.
                  </p>

                  {/* Bank Transfer */}
                  <motion.div 
                    className="p-4 bg-muted/20 rounded-xl border border-border"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div 
                        className="p-2 bg-primary/10 rounded-lg"
                        whileHover={{ rotate: 15, scale: 1.1 }}
                      >
                        <Landmark className="w-4 h-4 text-primary" />
                      </motion.div>
                      <h3 className="font-semibold text-foreground">Bank Transfer</h3>
                    </div>
                    <div className="space-y-1 text-sm ml-11">
                      <p><span className="text-muted-foreground">Bank:</span> <span className="text-foreground">Trust Merchant Bank (TMB)</span></p>
                      <p><span className="text-muted-foreground">Account Name:</span> <span className="text-foreground">ARBI - Africa Restoring Bridges Initiative</span></p>
                      <p><span className="text-muted-foreground">Account Number:</span> <span className="text-foreground">TMB-00123456789</span></p>
                      <p><span className="text-muted-foreground">SWIFT/BIC:</span> <span className="text-foreground">TMBCCDKK</span></p>
                    </div>
                  </motion.div>

                  {/* Mobile Money */}
                  <motion.div 
                    className="p-4 bg-muted/20 rounded-xl border border-border"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div 
                        className="p-2 bg-primary/10 rounded-lg"
                        whileHover={{ rotate: 15, scale: 1.1 }}
                      >
                        <Smartphone className="w-4 h-4 text-primary" />
                      </motion.div>
                      <h3 className="font-semibold text-foreground">Mobile Money</h3>
                    </div>
                    <div className="space-y-1 text-sm ml-11">
                      <p><span className="text-muted-foreground">Phone Number:</span> <span className="text-foreground">+243 971 944 496</span></p>
                      <p><span className="text-muted-foreground">Account Name:</span> <span className="text-foreground">ARBI</span></p>
                      <p className="text-xs text-muted-foreground mt-2">Airtel Money, M-Pesa, Orange Money accepted</p>
                    </div>
                  </motion.div>

                  {/* Credit/Debit Card */}
                  <motion.div 
                    className="p-4 bg-muted/20 rounded-xl border border-border"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div 
                        className="p-2 bg-primary/10 rounded-lg"
                        whileHover={{ rotate: 15, scale: 1.1 }}
                      >
                        <CreditCard className="w-4 h-4 text-primary" />
                      </motion.div>
                      <h3 className="font-semibold text-foreground">Credit / Debit Card</h3>
                    </div>
                    <div className="text-sm ml-11">
                      <p className="text-muted-foreground">Visa, Mastercard, American Express</p>
                    </div>
                  </motion.div>

                  {/* Contact for assistance */}
                  <div className="mt-4 pt-3 border-t border-border">
                    <div className="space-y-2 text-sm">
                      <motion.p className="flex items-center gap-2" whileHover={{ x: 5 }}>
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">Avenue Jacarandas, 32 D, Q. Les Volcans, Goma, North Kivu, DRC</span>
                      </motion.p>
                      <motion.p className="flex items-center gap-2" whileHover={{ x: 5 }}>
                        <Phone className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">+243-971 944 496</span>
                      </motion.p>
                      <motion.p className="flex items-center gap-2" whileHover={{ x: 5 }}>
                        <Mail className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">sewimfuratheo@gmail.com</span>
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Impact Stats */}
              <motion.div 
                className="mt-5 bg-primary/5 rounded-2xl p-5 border border-primary/20 text-center"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-sm text-muted-foreground mb-2">Your donation today will</p>
                <p className="text-foreground font-medium">🕊️ Fund trauma counseling for 10 survivors</p>
                <p className="text-foreground font-medium mt-1">📚 Provide leadership training for 5 community leaders</p>
                <p className="text-foreground font-medium mt-1">🏠 Support youth reintegration programs</p>
                <p className="text-foreground font-medium mt-1">🌍 Help rebuild communities in North Kivu</p>
              </motion.div>

              {/* Scripture Reminder */}
              <motion.div 
                className="mt-5 bg-card rounded-2xl p-5 border border-border text-center"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
                </motion.div>
                <p className="text-sm italic text-muted-foreground">
                  "You will be called Repairer of Broken Walls, Restorer of Streets with Dwellings."
                </p>
                <p className="text-xs text-primary mt-2">— Isaiah 58:12</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <motion.section 
        className="py-12 border-y border-border bg-muted/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-serif font-bold text-foreground">Our Impact Across North Kivu</h2>
            <p className="text-muted-foreground">Since our founding in 2011, we have worked tirelessly to bring healing and peace</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {impactMetrics.map((metric, idx) => (
              <motion.div
                key={idx}
                className="text-center p-5 rounded-xl bg-card shadow-card border border-border"
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <motion.div 
                  className="w-10 h-10 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  <metric.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full shadow-soft">
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <Calendar className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="text-foreground font-semibold">2011</span>
              <span className="text-muted-foreground">Year Founded</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Where Your Donation Goes - ARBI Programs */}
      <motion.section 
        className="py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-serif font-bold text-foreground">Where Your Donation Goes</h2>
            <p className="text-muted-foreground">Four programs transforming communities</p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-4 gap-5 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { icon: HandHeart, title: "Healing, Peace-Building & Reconciliation", percent: "40%", desc: "Mental Health and Psycho-social Support" },
              { icon: Users, title: "Abundant Leadership Development", percent: "25%", desc: "Equipping servant leaders" },
              { icon: Building2, title: "Integral Community Development", percent: "20%", desc: "Holistic development approaches" },
              { icon: GraduationCap, title: "Promoting Resilience Among Youth", percent: "15%", desc: "Delinquency prevention & reintegration" },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="text-center p-4"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  <item.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                <motion.p 
                  className="text-2xl font-bold text-primary"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.percent}
                </motion.p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section 
        className="py-12 bg-muted/30 border-t border-border"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <Sparkles className="w-10 h-10 text-primary mx-auto mb-3" />
            </motion.div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">Stay Connected With Our Mission</h3>
            <p className="text-muted-foreground text-sm mb-5">
              Join our newsletter to receive impact stories, updates, and ways to get involved.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="rounded-lg"
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap">
                  Subscribe
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Donate;