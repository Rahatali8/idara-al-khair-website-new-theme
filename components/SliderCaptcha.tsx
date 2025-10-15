// "use client";
// import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
// import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

// interface Props {
//     onVerify: () => void;
// }

// export default function SliderCaptcha({ onVerify }: Props) {
//     return (
//         <div style={{ width: "400px", margin: "20px auto" }}>
//             <h2 className="text-center text-sm font-semibold mb-2">
//                 Please solve the captcha
//             </h2>
//             <div className="text-center mb-3">
//                 <p className="text-gray-600 text-sm mb-1">🔍 Hint: Complete picture should look like this</p>
//                 <img src="/captcha/chap-1.jfif" alt="hint" className="mx-auto w-32 h-20 object-cover rounded border" />
//             </div>

//             <JigsawPuzzle
//                 imageSrc="/captcha/chap-1.jfif"   // ✅ apni image ka path (public/captcha/bg.jpg)
//                 rows={3}                     // ✅ rows
//                 columns={3}                  // ✅ columns
//                 onSolved={onVerify}          // ✅ Jab solve hoga parent ko notify karega
//             />
//         </div>
//     );
// }
