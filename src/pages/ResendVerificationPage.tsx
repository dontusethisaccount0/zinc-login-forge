
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Mail, Send, RefreshCw, ArrowLeft } from "lucide-react";

const ResendVerificationPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Verification Email Sent!",
        description: "Please check your email for the new verification link."
      });
      setEmailSent(true);
      setIsLoading(false);
    }, 2000);
  };

  if (emailSent) {
    return (
      <AuthLayout 
        title="Verification email sent" 
        subtitle="Check your email for the new verification link"
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
                New verification email sent
              </h3>
              <p className="text-muted-foreground text-sm">
                We've sent a new verification link to <strong>{email}</strong>. 
                Please check your email and click the link to verify your account.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-muted-foreground text-sm">
                Still didn't receive it? Check your spam folder or try again in a few minutes.
              </p>
              <Button 
                onClick={() => setEmailSent(false)}
                variant="outline"
                className="w-full"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Send to different email
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-accent/50 border-border mt-6">
          <CardContent className="pt-6 text-center space-y-3">
            <p className="text-muted-foreground text-sm">
              Already verified?{" "}
              <Link to="/login" className="auth-link">
                Go to login
              </Link>
            </p>
            <p className="text-muted-foreground text-sm">
              Need help?{" "}
              <Link to="/forgot-password" className="auth-link">
                Reset password instead
              </Link>
            </p>
          </CardContent>
        </Card>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout 
      title="Resend verification email" 
      subtitle="Enter your email to receive a new verification link"
    >
      <Card className="bg-accent/50 border-border mb-6">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-3">
            <Mail className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-foreground mb-1">
                Need to verify your email?
              </h4>
              <p className="text-xs text-muted-foreground">
                If you didn't receive the verification email or if it expired, 
                you can request a new one using the form below.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

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
            Enter the email address you used to register your account.
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
              Send Verification Email
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

export default ResendVerificationPage;
