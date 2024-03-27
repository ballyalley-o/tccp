import { ReactNode, FormEvent } from 'react'
import { FormProvider as Form } from 'react-hook-form'

export default function FormProvider({
  children,
  onSubmit,
  methods
}: {
  children: ReactNode
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  methods: any
}) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  )
}
