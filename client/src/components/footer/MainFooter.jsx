export default function MainFooter() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-8 bg-transparent text-white ">
      <h6>&copy; All rights reserved. Vidaare</h6>
      <div className="flex flex-row gap-4 mt-4 md:mt-0">
        <button onClick={() => alert("Terms Conditions to be implemented!")}>
          Terms and Conditions{" "}
        </button>
        <h6>|</h6>
        <button onClick={() => alert("Privacy Policy to be implemented!")}>
          Privacy
        </button>
      </div>
    </div>
  );
}
