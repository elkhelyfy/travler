"use client"

import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Card,CardContent,CardDescription,CardHeader,CardTitle } from '@/components/ui/card'

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
})

const handleSubmit = (data: any) => {
    console.log(data);
}

const Login = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    return (
        <div className='my-5'>
            <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
      <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)} className='grid gap-4'>
                            <FormField
                                control={form.control}
                                name='email'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input {...field} type='email' placeholder='m@example.com' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='password'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input {...field} type='password' placeholder='password' autoComplete="off" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full">Login</Button>
                            <Button variant="outline" className="w-full">Login with Google</Button>
                            <Button variant="outline" className="w-full">Login with Github</Button>
                            <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link href="/api/register" className="underline">
                                Sign up
                            </Link>
                            </div>
                        </form>
                    </Form>
        </CardContent>
    </Card>
    </div>
    )
}

export default Login
