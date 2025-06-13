
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Lock, Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";

const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tokenValid, setTokenValid] = useState<boolean | null>(null);
  const [resetComplete, setResetComplete] = useState(false);
  
  const token = searchParams.get('token');

  useEffect(() => {
    if (token) {
      // Simulate token validation
      setTimeout(() => {
        // Randomly simulate valid/invalid token for demo
        const isValid = Math.random() > 0.2;
        setTokenValid(isValid);
      }, 1000);
    } else {
      setTokenValid(false);
    }
  }, [token]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 8) {
      toast({
        title: "Error",
        description: "Password must be at least 8 characters long",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Password Reset Successful!",
        description: "Your password has been updated successfully."
      });
      setResetComplete(true);
      setIsLoading(false);
    }, 2000);
  };

  if (tokenValid === null) {
    return (
      <AuthLayout 
        title="Reset Password" 
        subtitle="Validating reset token..."
      >
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
          </div>
          <p className="text-muted-foreground">Validating your reset token...</p>
        </div>
      </AuthLayout>
    );
  }

  if (!tokenValid) {
    return (
      <AuthLayout 
        title="Invalid Reset Link" 
        subtitle="This password reset link is invalid or has expired"
      >
        <Card className="bg-card border-border">
          <CardContent className="pt-6 text-center space-y-6">
            <div className="flex justify-center">
              <XCircle className="h-16 w-16 text-red-500" />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Invalid or Expired Link
              </h3>
              <p className="text-muted-foreground text-sm">
                This password reset link is invalid or has expired. Please request a new password reset.
              </p>
            </div>

            <Link to="/forgot-password">
              <Button className="auth-button">
                Request New Reset Link
              </Button>
            </Link>
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

  if (resetComplete) {
    return (
      <AuthLayout 
        title="Password Reset Complete" 
        subtitle="Your password has been successfully updated"
      >
        <Card className="bg-card border-border">
          <CardContent className="pt-6 text-center space-y-6">
            <div className="flex justify-center">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Password Updated Successfully
              </h3>
              <p className="text-muted-foreground text-sm">
                Your password has been updated. You can now log in with your new password.
              </p>
            </div>

            <Link to="/login">
              <Button className="auth-button">
                Continue to Login
              </Button>
            </Link>
          </CardContent>
        </Card>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout 
      title="Reset your password" 
      subtitle="Enter your new password below"
    >
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="space-y-2">
          <Label htmlFor="password" className="text-foreground">New Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your new password"
              value={formData.password}
              onChange={handleInputChange}
              className="pl-10 pr-10 auth-input"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          <p className="text-xs text-muted-foreground">
            Password must be at least 8 characters long
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-foreground">Confirm New Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your new password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="pl-10 pr-10 auth-input"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <Button 
          type="submit" 
          className="auth-button"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
              Updating Password...
            </>
          ) : (
            <>
              <Lock className="h-4 w-4 mr-2" />
              Update Password
            </>
          )}
        </Button>
      </form>

      <Card className="bg-accent/50 border-border">
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
};

export default ResetPasswordPage;
