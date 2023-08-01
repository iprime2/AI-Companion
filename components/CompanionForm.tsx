'use client'

import { FC } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Companion, category } from '@prisma/client'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem } from './ui/form'
import { Separator } from './ui/separator'
import ImageUpload from './ImageUpload'

interface CompanionFormProps {
  initialData: Companion
  categories: category[]
}

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required',
  }),
  description: z.string().min(200, {
    message: 'Instructions must be at least 200 characters long',
  }),
  seed: z.string().min(200, {
    message: 'Seed must be at least 200 characters long',
  }),
  src: z.string().min(1, {
    message: 'Source is required',
  }),
  categoryId: z.string().min(1, {
    message: 'Category is required',
  }),
})

const CompanionForm: FC<CompanionFormProps> = ({ initialData, categories }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: '',
      description: '',
      instructions: '',
      seed: '',
      src: '',
      categoryId: undefined,
    },
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data)
  }

  return (
    <div className='h-full p-4 space-x-2 max-w-3xl mx-auto'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 pb-10'
        >
          <div className='space-y-2 w-full '>
            <div>
              <h3 className='text-lg font-medium'>General Information</h3>
              <p className='text-sm text-muted-foreground'>
                General information about your Companion
              </p>
            </div>
            <Separator className='bg-primary/10' />
          </div>
          <FormField
            name='src'
            render={({ field }) => (
              <FormItem className='flex flex-col items-center justify-center space-y-4'>
                <FormControl>
                  <ImageUpload
                    disabled={isLoading}
                    onChange={field.onChange}
                    value={field.value}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}

export default CompanionForm
