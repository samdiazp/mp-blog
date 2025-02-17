"use client";
import { useAuth } from "@/context";
import Link from "next/link";

export function Navigation() {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-6">
          <Link href="/" className="text-4xl font-light tracking-widest">
            Marily palmar
          </Link>
          <p className="text-sm text-muted-foreground mt-1">Mi Blog Personal</p>
        </div>
        <ul className="flex justify-center space-x-8 text-sm uppercase tracking-wider">
          <li>
            <Link href="/" className="hover:text-gray-600">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-600">
              Contacto
            </Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link href="/create" className="hover:text-gray-600">
                Crear POST
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
