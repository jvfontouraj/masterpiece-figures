/* eslint-disable react/display-name */
import * as React from 'react'
import classNames from 'classnames'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { artistas } from '@/content/artistas'
import Image from 'next/image'

export default function Artistas() {
  return (
    <main className="mb-5 mt-16 md:mt-28">
      <section className="mx-auto max-w-7xl pt-5">
        <Accordion.Root
          className="w-full shadow-[0_2px_10px] shadow-black/5"
          type="single"
          defaultValue="item-1"
          collapsible
        >
          {artistas.map((artista, index) =>
            index % 2 === 0 ? (
              <AccordionItemOdd value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="relative text-gold">
                  {artista.name}
                  <svg
                    className="absolute left-20 top-0 -translate-y-full md:left-52"
                    width="31"
                    height="15"
                    viewBox="0 0 31 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_23_16)">
                      <path
                        d="M15.5 1L30.6554 16H0.344556L15.5 1Z"
                        fill="black"
                      />
                      <path
                        d="M1 15L15.5 1L30 15"
                        stroke="#DBC79A"
                        strokeWidth="1.5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_23_16">
                        <rect width="31" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="w-full">
                    {artista.image && (
                      <Image src={artista.image} alt={artista.name} />
                    )}
                  </div>
                  <div className="gap-x-10 md:col-span-2 md:[column-count:2]">
                    {artista.description.map((desc, index) => (
                      <p
                        key={index}
                        className="mb-4"
                        dangerouslySetInnerHTML={{ __html: desc.text }}
                      />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItemOdd>
            ) : (
              <AccordionItemEven value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="relative text-black">
                  {artista.name}
                  <svg
                    className="absolute left-20 top-0 -translate-y-full md:left-52"
                    width="31"
                    height="15"
                    viewBox="0 0 31 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_24_17)">
                      <path
                        d="M15.5 1L30.6554 16H0.344556L15.5 1Z"
                        fill="#DBC79A"
                      />
                      <path
                        d="M1 15L15.5 1L30 15"
                        stroke="black"
                        strokeWidth="1.5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_24_17">
                        <rect width="31" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="w-full">
                    {artista.image && (
                      <Image src={artista.image} alt={artista.name} />
                    )}
                  </div>
                  <div className="gap-x-10 md:col-span-2 md:[column-count:2]">
                    {artista.description.map((desc, index) => (
                      <p
                        key={index}
                        className="mb-4"
                        dangerouslySetInnerHTML={{ __html: desc.text }}
                      />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItemEven>
            ),
          )}
        </Accordion.Root>
      </section>
    </main>
  )
}

const AccordionItemEven = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string; value: string }
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={classNames('bg-gold first:mt-0', className)}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
))

const AccordionItemOdd = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string; value: string }
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={classNames(
      'border-t border-t-[#dbc79a] bg-black text-white first:mt-0',
      className,
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
))

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  { children: React.ReactNode; className?: string }
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={classNames(
        'group flex h-[45px] flex-1 cursor-default items-center justify-between px-5 py-10 text-start text-xl leading-none tracking-[.5rem] outline-none md:px-10 md:py-12 md:text-3xl',
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        className="transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
))
const AccordionContent = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string }
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames(
      'overflow-hidden text-[15px] data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown',
      className,
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="grid gap-10 px-10 pb-20 pt-5 md:grid-cols-[2fr_3fr_3fr]">
      {children}
    </div>
  </Accordion.Content>
))
