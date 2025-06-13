
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, LogIn, Mail, Key, RefreshCw, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">AuthFlow</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline" className="text-foreground border-border hover:bg-accent">
                  Sign In
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Complete Authentication System
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A modern, secure authentication flow with all the essential features you need.
            Built with React, TypeScript, and styled with a sleek black and zinc theme.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-card border-border hover:bg-accent/50 transition-colors duration-200">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <UserPlus className="h-6 w-6 text-primary" />
                <CardTitle className="text-foreground">User Registration</CardTitle>
              </div>
              <CardDescription className="text-muted-foreground">
                Secure user registration with email verification
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/register">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Try Registration
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:bg-accent/50 transition-colors duration-200">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <LogIn className="h-6 w-6 text-primary" />
                <CardTitle className="text-foreground">User Login</CardTitle>
              </div>
              <CardDescription className="text-muted-foreground">
                Secure login with email and password
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/login">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Try Login
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:bg-accent/50 transition-colors duration-200">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Mail className="h-6 w-6 text-primary" />
                <CardTitle className="text-foreground">Email Verification</CardTitle>
              </div>
              <CardDescription className="text-muted-foreground">
                Verify email addresses with secure tokens
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/verify-email">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Try Verification
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:bg-accent/50 transition-colors duration-200">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Key className="h-6 w-6 text-primary" />
                <CardTitle className="text-foreground">Password Reset</CardTitle>
              </div>
              <CardDescription className="text-muted-foreground">
                Secure password reset flow with email links
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/forgot-password">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Try Reset
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:bg-accent/50 transition-colors duration-200">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <RefreshCw className="h-6 w-6 text-primary" />
                <CardTitle className="text-foreground">Resend Verification</CardTitle>
              </div>
              <CardDescription className="text-muted-foreground">
                Resend verification emails when needed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/resend-verification">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Try Resend
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:bg-accent/50 transition-colors duration-200">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary" />
                <CardTitle className="text-foreground">Security First</CardTitle>
              </div>
              <CardDescription className="text-muted-foreground">
                Built with security best practices in mind
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button disabled className="w-full opacity-75">
                Secure by Design
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
