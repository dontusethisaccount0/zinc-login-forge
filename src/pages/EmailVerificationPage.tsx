
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Mail, CheckCircle, XCircle, RefreshCw } from "lucide-react";

const EmailVerificationPage = () => {
  const [searchParams] = useSearchParams();
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error' | 'expired'>('loading');
  const [isResending, setIsResending] = useState(false);
  const token = searchParams.get('token');

  useEffect(() => {
    if (token) {
      // Simulate token verification
      setTimeout(() => {
        // Randomly simulate success or failure for demo
        const isValid = Math.random() > 0.3;
        setVerificationStatus(isValid ? 'success' : 'error');
      }, 2000);
    } else {
      setVerificationStatus('error');
    }
  }, [token]);

  const handleResendVerification = async () => {
    setIsResending(true);
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Verification Email Sent!",
        description: "Please check your email for the verification link."
      });
      setIsResending(false);
    }, 1500);
  };

  const renderContent = () => {
    switch (verificationStatus) {
      case 'loading':
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Verifying your email</h2>
              <p className="text-muted-foreground">Please wait while we verify your email address...</p>
            </div>
          </div>
        );

      case 'success':
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Email Verified!</h2>
              <p className="text-muted-foreground">
                Your email has been successfully verified. You can now access all features of your account.
              </p>
            </div>
            <Link to="/login">
              <Button className="auth-button">
                Continue to Login
              </Button>
            </Link>
          </div>
        );

      case 'error':
      case 'expired':
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <XCircle className="h-16 w-16 text-red-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                {verificationStatus === 'expired' ? 'Link Expired' : 'Verification Failed'}
              </h2>
              <p className="text-muted-foreground">
                {verificationStatus === 'expired' 
                  ? 'This verification link has expired. Please request a new one.'
                  : 'We couldn\'t verify your email. The link may be invalid or expired.'
                }
              </p>
            </div>
            <Button 
              onClick={handleResendVerification}
              className="auth-button"
              disabled={isResending}
            >
              {isResending ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Resend Verification Email
                </>
              )}
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <AuthLayout 
      title="Email Verification" 
      subtitle="Verify your email address to complete registration"
    >
      <Card className="bg-card border-border">
        <CardContent className="pt-6">
          <div className="flex justify-center mb-6">
            <Mail className="h-12 w-12 text-primary" />
          </div>
          {renderContent()}
        </CardContent>
      </Card>

      {verificationStatus !== 'loading' && (
        <Card className="bg-accent/50 border-border mt-6">
          <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground text-sm">
              Need help?{" "}
              <Link to="/resend-verification" className="auth-link">
                Resend verification email
              </Link>
              {" "}or{" "}
              <Link to="/login" className="auth-link">
                back to login
              </Link>
            </p>
          </CardContent>
        </Card>
      )}
    </AuthLayout>
  );
};

export default EmailVerificationPage;
