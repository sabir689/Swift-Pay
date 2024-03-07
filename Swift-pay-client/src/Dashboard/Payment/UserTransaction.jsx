import jsPDF from "jspdf";
import UseAllTransaction from "../../hooks/UseAllTransaction";
import "jspdf-autotable";
const UserTransaction = () => {
  const [orders] = UseAllTransaction();
  const downloadAsPdf = (order) => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Define the content for the invoice
    const invoiceContent = [
      { field: "Transaction ID", value: order.transactionId },
      { field: "Product", value: order.product.productName },
      { field: "Price", value: order.product.price },
      { field: "Seller", value: order.product.name },
      { field: "Seller Email", value: order.product.email },
      { field: "Payment Status", value: order.paidStatus ? "Paid" : "Unpaid" },
    ];

    // Set font styles
    doc.setFontSize(12);

    // Add header
    doc.text(
      "Invoice",
      doc.internal.pageSize.getWidth() / 2,
      15,
      null,
      null,
      "center"
    );

    // Reset font styles
    doc.setFont("helvetica");

    // Convert content to table format
    const tableContent = invoiceContent.map((item) => [item.field, item.value]);

    // Add table using autotable plugin
    doc.autoTable({
      head: [["Field", "Value"]],
      body: tableContent,
      startY: 20, // Start the table below the header
    });

    // Save the PDF with a filename including the order ID
    doc.save(`invoice_${order.transactionId}.pdf`);
  };
  return (
    <div className="mt-20 mb-12">
      <section className="container px-4 mx-auto">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Transaction ID
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Price
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Status
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Seller
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Product
                    </th>

                    <th scope="col" className="relative py-3.5 px-4">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {orders.map((order) => (
                    <tr key={order._id}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <span>{order.transactionId}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {order.customerInfo.category} {order.product.price}
                      </td>
                      <td
                        className={`px-4 py-4 text-sm font-medium ${
                          order.paidStatus ? "text-emerald-700" : "text-red-700"
                        } whitespace-nowrap`}
                      >
                        <div
                          className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                            order.paidStatus
                              ? "text-emerald-500 bg-emerald-100/60"
                              : "text-red-500 bg-red-100/60"
                          } dark:bg-gray-800`}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <h2 className="text-sm font-normal">
                            {order.paidStatus ? "Paid" : "Unpaid"}
                          </h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <div>
                            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                              {order.product.name}
                            </h2>
                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                              {order.product.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <img
                            className="object-cover w-8 h-8 rounded-full"
                            src={order.product.image}
                            alt=""
                          />
                          <div>
                            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                              {order.product.productName}
                            </h2>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button
                            className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                            onClick={() => downloadAsPdf(order)}
                          >
                            Download Invoice
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserTransaction;
