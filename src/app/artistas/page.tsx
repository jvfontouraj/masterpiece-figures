/* eslint-disable react/display-name */
import * as React from 'react'
import classNames from 'classnames'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { artistas } from '@/content/artistas'
import Image from 'next/image'

export default function Artistas() {
  return (
    <main className="mt-28">
      <section className="mx-auto max-w-7xl">
        <Accordion.Root
          className="w-full shadow-[0_2px_10px] shadow-black/5"
          type="single"
          defaultValue="item-1"
          collapsible
        >
          {artistas.map((artista, index) =>
            index % 2 === 0 ? (
              <AccordionItemOdd value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="text-gold">
                  {artista.name}
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <Image src={artista.image} alt={artista.name} />
                  </div>
                  <div className="col-span-2 gap-x-10 [column-count:2]">
                    {artista.description.map((desc, index) => (
                      <p key={index} className="mb-4">
                        {desc.text}
                      </p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItemOdd>
            ) : (
              <AccordionItemEven value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="text-black">
                  {artista.name}
                </AccordionTrigger>
                <AccordionContent>
                  {artista.description.map((desc, index) => (
                    <p key={index} className="mb-4">
                      {desc.text}
                    </p>
                  ))}
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
    className={classNames(
      'mt-px overflow-hidden bg-gold first:mt-0 focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]',
      className,
    )}
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
      'overflow-hidden border-t border-t-[#dbc79a] bg-black text-white first:mt-0',
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
        'group flex h-[45px] flex-1 cursor-default items-center justify-between px-10 py-12 text-3xl leading-none tracking-[.5rem] outline-none',
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
    <div className="grid grid-cols-3 gap-10 px-10 pb-20 pt-5">{children}</div>
  </Accordion.Content>
))
