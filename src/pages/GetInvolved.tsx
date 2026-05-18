import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Heart,
  Users,
  Calendar,
  MapPin,
  Clock,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

/* Dialog (modal) components */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

const volunteerCategories = [
  {
    title: "Education Support",
    description: "Tutor children, help with homework, or teach life skills",
    icon: "📚",
  },
  {
    title: "Event Coordination",
    description: "Help organize fundraisers and community events",
    icon: "🎉",
  },
  {
    title: "Healthcare",
    description: "Support health drives and awareness programs",
    icon: "🏥",
  },
  {
    title: "Administrative",
    description: "Assist with office work and communication",
    icon: "💼",
  },
];

const upcomingEvents = [
  {
    title: "Community Blood Drive",
    date: "December 15, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "arbi org Center",
    type: "Health",
  },
  {
    title: "Holiday Fundraiser Gala",
    date: "December 20, 2024",
    time: "6:00 PM - 10:00 PM",
    location: "Grand Hotel Ballroom",
    type: "Fundraiser",
  },
  {
    title: "Children's Outreach Mission",
    date: "January 5, 2025",
    time: "8:00 AM - 2:00 PM",
    location: "Mukono District Schools",
    type: "Outreach",
  },
];

const GetInvolved = () => {
  const { toast } = useToast();
  const [donationAmount, setDonationAmount] = useState("");

  // Modal state
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<typeof upcomingEvents[0] | null>(null);

  // Modal form fields
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [regNote, setRegNote] = useState("");

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Donation Received",
      description: "Thank you. We will contact you shortly.",
    });
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Received",
      description: "We will contact you within 48 hours.",
    });
  };

  const openRegisterModal = (eventItem: typeof upcomingEvents[0]) => {
    setSelectedEvent(eventItem);
    // optionally prefill fields or clear
    setRegName("");
    setRegEmail("");
    setRegPhone("");
    setRegNote("");
    setIsDialogOpen(true);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you could send data to backend. For now show toast and close
    toast({
      title: "Registration Submitted",
      description: `You have registered for "${selectedEvent?.title}". We'll contact you at ${regEmail || regPhone}.`,
    });
    setIsDialogOpen(false);
    setSelectedEvent(null);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Get <span>Involved</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your support helps us provide care, education, and hope to children and families.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20" id="donate">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT SIDE — Company Donation Info */}
            <div>
              <div className="inline-flex items-center gap=2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                <Heart className="w-4 h-4" />
                Make a Donation
              </div>

              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Support Our Mission
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Your contribution helps us keep children in school, provide healthcare,
                and support vulnerable families. You can donate through any of the contacts below.
              </p>

              <div className="space-y-4 text-foreground">
                <p><strong>Email:</strong> arbiorg@gmail.com</p>
                <p><strong>Phone:</strong> +256 700 000 000</p>
                <p><strong>Bank Account:</strong></p>
                <ul className="text-muted-foreground">
                  <li>Bank: Equity Bank</li>
                  <li>Account Name: arbi org</li>
                  <li>Account Number: 123456789</li>
                </ul>
                <p><strong>Momo Account:</strong></p>
                <ul className="text-muted-foreground">
                  <li>Phone Number: +256 700 000 000</li>
                  <li>Account Name: arbi org</li>
                </ul>
              </div>
            </div>

            {/* RIGHT SIDE — Donation Form */}
            <div className="bg-card rounded-3xl p-8 shadow-card">
              <form onSubmit={handleDonationSubmit} className="space-y-6">
                <h3 className="text-xl font-serif font-semibold mb-4">Donation Form</h3>

                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <Input placeholder="Your full name" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <Input type="email" placeholder="your@email.com" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <Input type="tel" placeholder="+256 700 000 000" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Donation Amount (USD)</label>
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Donate Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 bg-secondary/30" id="volunteer">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Volunteer Form */}
            <div className="bg-card rounded-3xl p-8 shadow-card order-2 lg:order-1">
              <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Volunteer Application
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">First Name</label>
                    <Input placeholder="John" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Last Name</label>
                    <Input placeholder="Doe" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <Input type="email" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <Input type="tel" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Area of Interest</label>
                  <select className="w-full p-3 rounded-lg border border-border bg-background">
                    <option>Select an area</option>
                    <option value="education">Education Support</option>
                    <option value="events">Event Coordination</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="admin">Administrative</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Why do you want to volunteer?
                  </label>
                  <Textarea rows={3} placeholder="Tell us about yourself..." />
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  <Users className="w-4 h-4" />
                  Submit Application
                </Button>
              </form>
            </div>

            {/* Volunteer Categories */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap=2 px-4 py-2 bg-teal/10 rounded-full text-teal text-sm font-medium mb-4">
                <Users className="w-4 h-4" />
                Become a Volunteer
              </div>

              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Join Our Team of Changemakers
              </h2>

              <p className="text-muted-foreground mb-8">
                Volunteering with us is a meaningful way to support communities.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {volunteerCategories.map((category) => (
                  <div key={category.title} className="bg-card p-4 rounded-xl">
                    <span className="text-2xl">{category.icon}</span>
                    <h4 className="font-semibold mt-2">{category.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20" id="events">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-gold text-sm font-medium mb-4">
              <Calendar className="w-4 h-4" />
              Upcoming Events
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Join Us at Our Events
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our events bring communities together and create lasting impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="bg-card rounded-2xl p-6 shadow-soft">
                <h3 className="font-serif font-semibold mb-4">{event.title}</h3>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> {event.location}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-4"
                  onClick={() => openRegisterModal(event)}
                >
                  Register
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Register for Event</DialogTitle>
            <DialogDescription>
              {selectedEvent ? selectedEvent.title : "Event registration"}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleRegisterSubmit} className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <Input
                value={regName}
                onChange={(e) => setRegName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input
                type="email"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <Input
                type="tel"
                value={regPhone}
                onChange={(e) => setRegPhone(e.target.value)}
                placeholder="+256 700 000 000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Note (optional)</label>
              <Textarea
                value={regNote}
                onChange={(e) => setRegNote(e.target.value)}
                rows={3}
                placeholder="Any message for organizers..."
              />
            </div>

            <DialogFooter>
              <Button type="submit" variant="hero" className="w-full">
                Submit Registration
              </Button>
            </DialogFooter>
          </form>

          <DialogClose className="sr-only" />
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default GetInvolved;
