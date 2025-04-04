"use client"
import { useState } from 'react';
import Image from "next/image";
import { useForm } from 'react-hook-form';

export default function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [serverError, setServerError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setServerError('');

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Something went wrong');
            }

            // Redirect or show success message
            window.location.href = '/dashboard';

        } catch (error) {
            setServerError(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-20 py-12 font-[family-name:var(--font-geist-sans)]">
            <main className="w-full max-w-md space-y-8">
                <div className="flex flex-col items-center gap-4">
                    <Image
                        className="dark:invert"
                        src="/weowls-logo.svg" // Replace with your logo path
                        alt="WeOwls logo"
                        width={160}
                        height={36}
                    />
                    <h1 className="text-2xl sm:text-3xl font-semibold">
                        Create your WeOwls account
                    </h1>
                    <p className="text-sm text-muted-foreground text-center">
                        Join the community of curious learners and start sharing knowledge today.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium">
                                Username
                            </label>
                            <input
                                id="name"
                                type="text"
                                autoComplete="name"
                                {...register('username', {
                                    required: 'Username is required',
                                    minLength: {
                                        value: 3,
                                        message: 'Username must be at least 3 characters'
                                    }
                                })}
                                className="w-full mt-1 px-4 py-2 rounded border border-gray-300 dark:border-white/20 bg-white dark:bg-black/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.username && (
                                <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium">
                                Email address
                            </label>
                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Invalid email address'
                                    }
                                })}
                                className="w-full mt-1 px-4 py-2 rounded border border-gray-300 dark:border-white/20 bg-white dark:bg-black/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                autoComplete="new-password"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters'
                                    }
                                })}
                                className="w-full mt-1 px-4 py-2 rounded border border-gray-300 dark:border-white/20 bg-white dark:bg-black/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                            )}
                        </div>
                    </div>

                    {serverError && (
                        <p className="text-red-500 text-sm text-center">{serverError}</p>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-foreground text-background py-2.5 rounded-full font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors disabled:opacity-50"
                    >
                        {isSubmitting ? 'Creating account...' : 'Sign Up'}
                    </button>

                    <p className="text-sm text-center text-muted-foreground">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-600 dark:text-blue-400 hover:underline">
                            Log in
                        </a>
                    </p>
                </form>
            </main>
        </div>
    );
}
