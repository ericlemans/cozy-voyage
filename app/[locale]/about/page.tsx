import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LODGIFY } from '@/lib/lodgify';

export default function AboutPage() {
  return (
    <div className="bg-white text-black">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] max-h-[600px] w-full overflow-hidden bg-black">
        <Image
          src="/assets/images/Berlin_Ks_1.jpeg"
          alt="Cozy Voyage Berlin"
          fill
          className="object-cover opacity-55"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/85" />
        <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6 md:px-16 max-w-5xl mx-auto">
          <p
            className="text-rose-400 font-medium uppercase mb-4"
            style={{ letterSpacing: '0.25em', fontSize: '13px' }}
          >
            About Us
          </p>
          <h1
            className="text-white font-bold leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em', lineHeight: 1.0 }}
          >
            Susi &amp; Eric —<br />
            <span className="text-rose-400">Two travellers,</span><br />
            one idea.
          </h1>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-20 md:py-28">

        {/* Intro */}
        <p className="text-xl text-gray-700 leading-relaxed mb-10">
          Cozy Voyage started the way most good ideas do — on a trip. Susi and Eric, a couple
          with a shared obsession for travel and a weakness for beautiful spaces, kept asking
          themselves the same question in every city they visited: why does it have to be a choice
          between a soulless hotel room and a random stranger's apartment?
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-16">
          So they stopped asking and started building. Today, Cozy Voyage is their answer to that
          question: a small, carefully curated collection of apartments in Berlin and Dresden,
          run by two people who genuinely care about how their guests feel when they arrive —
          and when they leave.
        </p>

        {/* What drives us */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-6" style={{ letterSpacing: '-0.01em' }}>
            What drives us
          </h2>
          <div className="space-y-8">
            <div className="border-l-2 border-rose-500 pl-6">
              <h3 className="font-semibold text-black mb-2">Every detail matters</h3>
              <p className="text-gray-600 leading-relaxed">
                When you travel, the little things define the experience. The quality of the bedding.
                Whether the Wi-Fi actually works. How the light falls in the morning. We obsess over
                these things so you don't have to think about them.
              </p>
            </div>
            <div className="border-l-2 border-rose-500 pl-6">
              <h3 className="font-semibold text-black mb-2">Personal from start to finish</h3>
              <p className="text-gray-600 leading-relaxed">
                There's no call centre, no third-party property manager. When you reach out,
                you're talking to us. We know our apartments inside out — because we chose every
                piece of furniture in them.
              </p>
            </div>
            <div className="border-l-2 border-rose-500 pl-6">
              <h3 className="font-semibold text-black mb-2">Guests as guests, not transactions</h3>
              <p className="text-gray-600 leading-relaxed">
                We've been guests ourselves hundreds of times. We know what it means to arrive tired
                after a long journey, or to need a recommendation at 10pm. We try to be the hosts
                we always wished we'd had.
              </p>
            </div>
          </div>
        </div>

        {/* Property image */}
        <div className="relative w-full overflow-hidden mb-16" style={{ aspectRatio: '16/9' }}>
          <Image
            src="/assets/images/berlin_card.jpeg"
            alt="Our Berlin Ku'damm apartment"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5">
            <span className="text-white text-xs uppercase" style={{ letterSpacing: '0.15em' }}>
              Berlin Ku&apos;damm · 135m²
            </span>
          </div>
        </div>

        {/* Quote */}
        <blockquote className="border border-gray-200 p-8 mb-16 relative">
          <div className="absolute -top-3 left-8 bg-white px-2">
            <span className="text-rose-500 font-medium uppercase text-xs" style={{ letterSpacing: '0.2em' }}>
              Our philosophy
            </span>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed italic mb-4">
            "We don't rent out apartments. We share the places we love with people we hope
            will love them just as much — and that every stay feels unique."
          </p>
          <footer className="text-gray-500 text-sm font-medium not-italic">Susi &amp; Eric · Founders</footer>
        </blockquote>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black mb-3" style={{ letterSpacing: '-0.01em' }}>
            Come stay with us
          </h2>
          <p className="text-gray-600 mb-8">
            Berlin or Dresden — we&apos;d love to have you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={LODGIFY.all('de')}
              target="_blank"
              className="group inline-flex items-center gap-3 bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 text-sm font-semibold uppercase transition-all duration-300"
              style={{ letterSpacing: '0.12em' }}
            >
              See Our Apartments
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="mailto:info@cozy-voyage.com"
              className="inline-flex items-center gap-3 border border-gray-300 hover:border-rose-500 hover:text-rose-600 text-gray-700 px-8 py-4 text-sm font-semibold uppercase transition-all duration-300"
              style={{ letterSpacing: '0.12em' }}
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
