import { FaDownload } from 'react-icons/fa6'
import { TfiPrinter } from 'react-icons/tfi'

export default function DownloadBtns() {
  function handlePrint() {
    const sectionToPrint = document.getElementById('printed-section') // Replace with your ID
    sectionToPrint.focus() // Focus the element for better printing behavior
    window.print()
  }

  return (
    <div
      id="print-hidden"
      className="mt-8 text-md flex justify-center gap-8 py-8 flex-col sm:flex-row"
    >
      <button className="rounded-xl px-12 py-4 border hover:text-white hover:bg-orange-500 border-orange-500 text-orange-500 disabled">
        <span className="inline-flex items-center gap-2">
          <span className="size-4">
            <FaDownload />
          </span>
          PDF yüklə
        </span>
      </button>

      <button
        className={`rounded-xl px-12 py-4 border hover:text-white hover:bg-orange-500 border-orange-500 text-orange-500`}
        onClick={handlePrint}
      >
        <span className="inline-flex items-center gap-2">
          <span className="size-4">
            <TfiPrinter />
          </span>
          Çap et
        </span>
      </button>
    </div>
  )
}
