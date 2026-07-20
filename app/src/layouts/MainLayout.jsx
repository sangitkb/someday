import Header from "../components/layout/Header";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>{children}</main>
    </div>
  );
}

export default MainLayout;