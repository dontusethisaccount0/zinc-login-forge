
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="text-center space-y-2 mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
            <Shield className="h-8 w-8" />
            <span className="text-2xl font-bold">AuthFlow</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
          {subtitle && (
            <p className="text-muted-foreground">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
