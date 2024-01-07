export default function ModalBody({props}) {
  return (
    <main className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md overflow-hidden flex justify-center items-center">
      {/* Card body */}
      {props}
    </main>
  );
}
