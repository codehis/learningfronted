import React from 'react'

export default function PaymentCard({data}) {
  return (
    <>
       <div>
      <div class="container mx-auto">
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
razorpay_payment_id
</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
razorpay_subscription_id
</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
createdAt
</th>
          {/* <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th> */}

        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        {/* <!-- Replace this with your actual data --> */}
        <tr >
          {/* <td class="px-6 py-4 w-36  ">
            <div class="flex-shrink-0 h-10 w-10">
              <img class="h-10 w-10 rounded-full" src={data.thumbnail.
secure_url} alt=""/>
            </div>
          </td> */}
          <td class="px-6 py-4 w-36 ">
            <div class="text-sm   font-medium text-gray-900">{data.
razorpay_payment_id}</div>
          </td>
          <td class="px-6 py-4 w-36  ">
            <div class="text-sm text-gray-900">{data.razorpay_subscription_id}</div>
          </td>
          <td class="px-6 py-4 w-36  ">
            <div class="text-sm text-gray-900">{data.createdAt}</div>
          </td>
          {/* <td class="px-6 py-4 w-36  ">
            <div class="text-sm text-gray-900">{data.createdBy}</div>
          </td>
          <td class="px-6 py-4 w-36 ">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Update/Delete</span>
          </td> */}
        </tr>
        {/* <!-- Add more rows for additional data --> */}
      </tbody>
    </table>
  </div>
</div>

    </div>


    </>
  )
}
