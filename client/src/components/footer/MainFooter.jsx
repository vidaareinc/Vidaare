export default function MainFooter() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-8 bg-transparent text-white ">
      <h6>&copy; All rights reserved. Vidaare</h6>
      <div className="flex flex-row gap-4 mt-4 md:mt-0">
        <h6>Terms and Conditions </h6>
        <h6>|</h6>
        <h6>Privacy</h6>
      </div>
    </div>
  );
}