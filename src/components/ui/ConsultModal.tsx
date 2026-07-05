import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { getLenis } from "../../hooks/useLenis";

interface ConsultModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ConsultModal({ open, onClose }: ConsultModalProps) {
  useEffect(() => {
    if (open) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      getLenis()?.stop();
      return () => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        getLenis()?.start();
      };
    }
  }, [open]);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    age: "",
    gender: "",
    maritalStatus: "",
    scheduleDate: "",
    scheduleTime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({
      fullName: "",
      phone: "",
      email: "",
      age: "",
      gender: "",
      maritalStatus: "",
      scheduleDate: "",
      scheduleTime: "",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-y-auto rounded-[32px] bg-white p-8 shadow-[0_40px_100px_-20px_rgba(23,33,58,0.5)] sm:p-10"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#F3F4F6] text-[#667085] transition hover:bg-[#E5E7EB] hover:text-[#17213A]"
            >
              <X size={18} />
            </button>

            <div className="mb-7">
              <h2 className="font-serif text-2xl font-semibold tracking-tight text-[#17213A]">
                Consult a Sleep Specialist
              </h2>
              <p className="mt-1.5 text-sm text-[#667085]">
                Fill in your details and we&rsquo;ll get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#667085]">
                  Full Name
                </label>
                <input
                  required
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-sm text-[#17213A] placeholder:text-[#98A2B3] focus:border-[#5B8DEF] focus:outline-none focus:ring-2 focus:ring-[#5B8DEF]/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#667085]">
                    Phone
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-sm text-[#17213A] placeholder:text-[#98A2B3] focus:border-[#5B8DEF] focus:outline-none focus:ring-2 focus:ring-[#5B8DEF]/20"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#667085]">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-sm text-[#17213A] placeholder:text-[#98A2B3] focus:border-[#5B8DEF] focus:outline-none focus:ring-2 focus:ring-[#5B8DEF]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#667085]">
                    Age
                  </label>
                  <input
                    required
                    type="number"
                    min={1}
                    max={100}
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    placeholder="30"
                    className="w-full rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-sm text-[#17213A] placeholder:text-[#98A2B3] focus:border-[#5B8DEF] focus:outline-none focus:ring-2 focus:ring-[#5B8DEF]/20"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#667085]">
                    Gender
                  </label>
                  <select
                    required
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-sm text-[#17213A] focus:border-[#5B8DEF] focus:outline-none focus:ring-2 focus:ring-[#5B8DEF]/20"
                  >
                    <option value="" disabled>Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#667085]">
                    Marital Status
                  </label>
                  <select
                    required
                    name="maritalStatus"
                    value={form.maritalStatus}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-sm text-[#17213A] focus:border-[#5B8DEF] focus:outline-none focus:ring-2 focus:ring-[#5B8DEF]/20"
                  >
                    <option value="" disabled>Select</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#667085]">
                    Schedule Date
                  </label>
                  <input
                    required
                    type="date"
                    name="scheduleDate"
                    value={form.scheduleDate}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-sm text-[#17213A] focus:border-[#5B8DEF] focus:outline-none focus:ring-2 focus:ring-[#5B8DEF]/20"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#667085]">
                  Schedule Time
                </label>
                <input
                  required
                  type="time"
                  name="scheduleTime"
                  value={form.scheduleTime}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-sm text-[#17213A] focus:border-[#5B8DEF] focus:outline-none focus:ring-2 focus:ring-[#5B8DEF]/20"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#17213A] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(23,33,58,0.5)] transition-all hover:bg-[#232f4d] hover:shadow-[0_16px_36px_-8px_rgba(23,33,58,0.55)] active:scale-[0.98]"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
