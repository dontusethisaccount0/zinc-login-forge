
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Mail, ArrowLeft, Send } from "lucide-react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Reset Email Sent!",
        description: "Please check your email for password reset instructions."
      });
      setEmailSent(true);
      setIsLoading(false);
    }, 2000);
  };

  if (emailSent) {
    return (
      <AuthLayout 
        title="Check your email" 
        subtitle="We've sent password reset instructions to your email"
      >
        <Card className="bg-card border-border">
          <CardContent className="pt-6 text-center space-y-6">
            <div className="flex justify-center">
              <div className="bg-primary/10 p-4 rounded-full">
                <Mail className="h-12 w-12 text-primary" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Password reset email sent
              </h3>
              <p className="text-muted-foreground text-sm">
                We've sent a password reset link to <strong>{email}</strong>. 
                Please check your email and follow the instructions to reset your password.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-muted-foreground text-sm">
                Didn't receive the email? Check your spam folder or try again.
              </p>
              <Button 
                onClick={() => setEmailSent(false)}
                variant="outline"
                className="w-full"
              >
                Try with different email
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-accent/50 border-border mt-6">
          <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground text-sm">
              Remember your password?{" "}
              <Link to="/login" className="auth-link">
                Back to login
              </Link>
            </p>
          </CardContent>
        </Card>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout 
      title="Forgot your password?" 
      subtitle="Enter your email and we'll send you a reset link"
    >
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground">Email address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 auth-input"
              required
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Enter the email address associated with your account and we'll send you a link to reset your password.
          </p>
        </div>

        <Button 
          type="submit" 
          className="auth-button"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Send Reset Link
            </>
          )}
        </Button>
      </form>

      <Card className="bg-accent/50 border-border">
        <CardContent className="pt-6 text-center space-y-3">
          <p className="text-muted-foreground text-sm">
            <Link to="/login" className="auth-link inline-flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to login
            </Link>
          </p>
          <p className="text-muted-foreground text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="auth-link">
              Sign up here
            </Link>
          </p>
        </CardContent>
      </Card>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
