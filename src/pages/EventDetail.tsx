import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Calendar, MapPin, Clock, ArrowLeft, ArrowRight, Hourglass, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animationVariants";
import { client, urlFor } from "@/lib/sanity/client";
import { Button } from "@/components/ui/button";

interface SanityEvent {
    id: string;
    title: string;
    description: string;
    eventStatus: "upcoming" | "past";
    date: string;
    time: string;
    location: string;
    image: any;
    category: string;
}

const getImageUrl = (imageSource: any) => {
    if (!imageSource) return "/placeholder.svg";
    try {
        return urlFor(imageSource).url() || "/placeholder.svg";
    } catch {
        return "/placeholder.svg";
    }
};

const getStatusBadge = (status: string) => {
    if (status === "upcoming") {
        return {
            label: "Upcoming",
            icon: <Hourglass className="w-3 h-3" />,
            className: "bg-emerald-100 text-emerald-700",
        };
    }
    return {
        label: "Past Event",
        icon: <CheckCircle2 className="w-3 h-3" />,
        className: "bg-slate-100 text-slate-600",
    };
};

const EventDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [event, setEvent] = useState<SanityEvent | null>(null);
    const [relatedEvents, setRelatedEvents] = useState<SanityEvent[]>([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        setNotFound(false);

        client
            .fetch(
                `{
          "event": *[_type == "event" && _id == $id][0] {
            "id": _id,
            title,
            description,
            eventStatus,
            date,
            time,
            location,
            image,
            category
          },
          "related": *[_type == "event" && _id != $id] | order(_createdAt desc) [0..5] {
            "id": _id,
            title,
            description,
            eventStatus,
            date,
            time,
            location,
            image,
            category
          }
        }`,
                { id }
            )
            .then(({ event, related }) => {
                if (!event) {
                    setNotFound(true);
                } else {
                    setEvent(event);
                    setRelatedEvents(related || []);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching event:", err);
                setLoading(false);
                setNotFound(true);
            });
    }, [id]);

    if (loading) {
        return (
            <Layout>
                <div className="flex flex-col items-center justify-center min-h-[60vh]">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                    <p className="mt-4 text-muted-foreground animate-pulse">Loading event...</p>
                </div>
            </Layout>
        );
    }

    if (notFound || !event) {
        return (
            <Layout>
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                    <h2 className="text-3xl font-bold mb-4">Event Not Found</h2>
                    <p className="text-muted-foreground mb-6">This event could not be found.</p>
                    <Link to="/events">
                        <Button variant="hero">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Events
                        </Button>
                    </Link>
                </div>
            </Layout>
        );
    }

    const statusBadge = getStatusBadge(event.eventStatus || "upcoming");

    return (
        <Layout>
            {/* Hero Banner */}
            <motion.section
                className="relative h-[420px] md:h-[520px] flex items-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <div className="absolute inset-0">
                    <img
                        src={getImageUrl(event.image)}
                        alt={event.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                </div>
                <div className="relative container mx-auto px-4 pb-12">
                    <Link
                        to="/events"
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Events
                    </Link>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span
                            className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full ${statusBadge.className}`}
                        >
                            {statusBadge.icon} {statusBadge.label}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
                        {event.title}
                    </h1>
                </div>
            </motion.section>

            {/* Event Details */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-3xl">
                    {/* Meta info strip */}
                    <motion.div
                        className="flex flex-wrap gap-6 mb-10 p-6 bg-secondary/30 rounded-2xl border border-border"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="flex items-center gap-2 text-foreground">
                            <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                            <div>
                                <p className="text-xs text-muted-foreground uppercase tracking-wide">Date</p>
                                <p className="font-semibold">{event.date}</p>
                            </div>
                        </div>
                        {event.time && (
                            <div className="flex items-center gap-2 text-foreground">
                                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Time</p>
                                    <p className="font-semibold">{event.time}</p>
                                </div>
                            </div>
                        )}
                        {event.location && (
                            <div className="flex items-center gap-2 text-foreground">
                                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Location</p>
                                    <p className="font-semibold">{event.location}</p>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                    >
                        <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-line">
                            {event.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Other Events */}
            {relatedEvents.length > 0 && (
                <section className="py-16 bg-secondary/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Other Events</h2>
                        <motion.div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {relatedEvents.map((related) => {
                                const relatedBadge = getStatusBadge(related.eventStatus || "upcoming");
                                return (
                                    <motion.article
                                        key={related.id}
                                        className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all group cursor-pointer"
                                        variants={itemVariants}
                                        whileHover={{ y: -6 }}
                                    >
                                        <Link to={`/events/${related.id}`} className="block">
                                            <div className="aspect-[16/10] overflow-hidden relative">
                                                <motion.img
                                                    src={getImageUrl(related.image)}
                                                    alt={related.title}
                                                    className="w-full h-full object-cover"
                                                    whileHover={{ scale: 1.08 }}
                                                    transition={{ duration: 0.4 }}
                                                />
                                                <span
                                                    className={`absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full ${relatedBadge.className}`}
                                                >
                                                    {relatedBadge.icon} {relatedBadge.label}
                                                </span>
                                            </div>
                                            <div className="p-5">
                                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" /> {related.date}
                                                    </span>
                                                    {related.location && (
                                                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                            <MapPin className="w-3 h-3" />
                                                            {related.location.substring(0, 20)}
                                                        </span>
                                                    )}
                                                </div>
                                                <h3 className="font-serif font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                                                    {related.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground line-clamp-2">
                                                    {related.description}
                                                </p>
                                            </div>
                                        </Link>
                                    </motion.article>
                                );
                            })}
                        </motion.div>

                        <div className="text-center mt-10">
                            <Link to="/events">
                                <Button variant="hero">
                                    View All Events <ArrowRight className="w-4 h-4 ml-1" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </Layout>
    );
};

export default EventDetail;
