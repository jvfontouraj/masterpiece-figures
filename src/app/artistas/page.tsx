/* eslint-disable react/display-name */
import * as React from 'react'
import classNames from 'classnames'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'

export default function Artistas() {
  return (
    <main className="mt-28">
      <section className="mx-auto max-w-7xl">
        <Accordion.Root
          className="w-full bg-white shadow-[0_2px_10px] shadow-black/5"
          type="single"
          defaultValue="item-1"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>ARIO ANINDITO</AccordionTrigger>
            <AccordionContent>
              Renomado artista e ilustrador indonésio, conhecido por seu
              trabalho em quadrinhos e ilustrações detalhadas. Ele trabalhou com
              algumas das maiores editoras de quadrinhos do mundo, incluindo
              Marvel e DC Comics, contribuindo para títulos populares como
              &quot;Wolverine&quot;, &quot;X-Men&quot; e &quot;Batman&quot;.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>JASON FABOK</AccordionTrigger>
            <AccordionContent>
              Uma Jornada de Excelência e Exclusividade Jason Fabok é um nome
              que ressoa fortemente no mundo das artes e escultura,
              especialmente entre os entusiastas de figuras colecionáveis de
              alta qualidade. Com uma carreira marcada pela dedicação ao
              detalhismo e à busca incessante pelo realismo, Fabok se destaca
              como um dos escultores mais talentosos e respeitados da
              atualidade.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>JIM LEE</AccordionTrigger>
            <AccordionContent>Informações sobre o artista</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>JORGE JIMENEZ</AccordionTrigger>
            <AccordionContent>Informações sobre o artista</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>LEE BERMEJO</AccordionTrigger>
            <AccordionContent>Informações sobre o artista</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>OSWALD COBBLEPOT</AccordionTrigger>
            <AccordionContent>Informações sobre o artista</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>TIAGO RIOS</AccordionTrigger>
            <AccordionContent>Informações sobre o artista</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>YUAN XING LIANG</AccordionTrigger>
            <AccordionContent>Informações sobre o artista</AccordionContent>
          </AccordionItem>
        </Accordion.Root>
      </section>
    </main>
  )
}

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string; value: string }
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={classNames(
      'focus-within:shadow-mauve12 mt-px overflow-hidden bg-gold first:mt-0 focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]',
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
        'bg-mauve1 text-violet11 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between px-5 text-2xl leading-none shadow-[0_1px_0] outline-none',
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        className="text-violet10 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
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
      'bg-mauve2 text-mauve11 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden text-[15px]',
      className,
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="px-5 py-[15px]">{children}</div>
  </Accordion.Content>
))
