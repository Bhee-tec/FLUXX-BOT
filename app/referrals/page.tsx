'use client'
import { useState } from 'react';
import { ClipboardDocumentIcon, UserGroupIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import Navbar from '@/components/ui/Navbar'

interface ReferralStats {
  totalReferrals: number;
  totalEarnings: number;
  referrals: {
    id: number;
    name: string;
    date: string;
    earnings: number;
  }[];
}

export default function ReferralPage() {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const referralLink: string = "https://yourplatform.com/r/john-doe-123";

  // Mock data
  const referralStats: ReferralStats = {
    totalReferrals: 42,
    totalEarnings: 2560.50,
    referrals: [
      { id: 1, name: "Alice Smith", date: "2024-02-15", earnings: 50 },
      { id: 2, name: "Bob Johnson", date: "2024-02-14", earnings: 30 },
      { id: 3, name: "Charlie Brown", date: "2024-02-13", earnings: 45 },
    ]
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#1a1c2e] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">Referral Program</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#0e1024] p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <UserGroupIcon className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-sm text-gray-500">Total Referrals</h3>
                <p className="text-2xl font-bold text-gray-800">
                  {referralStats.totalReferrals}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0e1024] p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <CurrencyDollarIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm text-gray-500">Total Earnings</h3>
                <p className="text-2xl font-bold text-gray-800">
                  $flx {referralStats.totalEarnings.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Referral Link Section */}
        <div className="bg-[#0e1024] rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-white mb-4">Your Referral Link</h2>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 p-3 bg-black-500 rounded-lg truncate">
              {referralLink}
            </div>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <ClipboardDocumentIcon className="w-5 h-5" />
              {isCopied ? 'Copied!' : 'Copy Link'}
            </button>
          </div>
        </div>

        {/* Referral List */}
        <div className="bg-[#0e1024] rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Referrals</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="pb-3">Name</th>
                  <th className="pb-3">Date Joined</th>
                  <th className="pb-3 text-right">Your Earnings</th>
                </tr>
              </thead>
              <tbody>
                {referralStats.referrals.map((referral) => (
                  <tr key={referral.id} className="border-b last:border-b-0">
                    <td className="py-4">{referral.name}</td>
                    <td className="py-4 text-gray-500">{referral.date}</td>
                    <td className="py-4 text-right font-medium text-green-600">
                      +flx{referral.earnings}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
}
