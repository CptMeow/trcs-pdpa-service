<?php
namespace App\Libraries;

use Illuminate\Support\Facades\Storage;
use App\Models\User;

class Helper {

    public static function AppealChannel(string $channel_id = null, $other = null, $department = null)
    {
        
        $department = $department?' ('.self::Department($department).')':'';
        $other = $other?' ('.$other.')':'';

        $channel = [
            "department" => "ติดต่อผ่านทางสำนักงาน".$department,
            "email" => "อีเมล์",
            "telephone" => "โทรศัพท์",
            "other" => "ช่องทางอื่นๆ".$other,
        ];

        return $channel_id ? $channel[$channel_id]:$channel;
    }

    public static function AppealStatus(Int $status_id = null)
    {

        $status = [
            "1" => "เปิด",
            "2" => "อยู่ระหว่างดำเนินการ",
            "3" => "ปิด",
            "4" => "ส่งต่อหน่วยงานเจ้าของข้อมูล",
            "5" => "ปฏิเสธ",
            "6" => "ส่งต่อ สคส",
            "7" => "Re-Open",
        ];

        return $status_id ? $status[$status_id]:$status;
    }

    public static function AppealType(string $type_id = null, $reason = null)
    {
        $type = [
            "withdraw_consent" => "ขอถอนความยินยอม (Right to withdraw consent)",
            "appeal_right_to_access" => "ขอเข้าถึงข้อมูล (Right to access)",
            "appeal_right_to_data_portability" => "ขอถ่ายโอนข้อมูล (Right to data portability)",
            "appeal_right_to_object" => "ขอคัดค้านการเก็บรวบรวม ใช้ เปิดเผย ข้อมูลส่วนบุคคล (Right to object)",
            "appeal_right_to_erasure" => "ขอให้ลบหรือทำลายข้อมูล (Right to erasure)",
            "appeal_right_to_restriction_of_processing" => "ขอให้ระงับการใช้ข้อมูล (Right to restriction of processing)",
            "appeal_right_to_rectification" => "ขอให้แก้ไขข้อมูล (Right to rectification)",
            "appeal_right_to_other" => "อื่นๆ",
        ];

        $reason = $reason?" (".$reason.")":"";

        return $type_id ? $type[$type_id].$reason:$type;
    }

    public static function AppealRequestDate(String $date)
    {
        $timestemp = strtotime($date);
        return date('d/m/Y',$timestemp);
    }

    public static function Attachment(Object $attachment)
    {
        switch ($attachment->file_extension) {
            case 'jpeg':
            case 'jpg':
            case 'png':
                // $output = '<img src="'.Storage::url($attachment->file_path).'" alt="..." height="100px" width="100px" class="img-thumbnail rounded d-block">';
                $output = '<a href="#" class="pop btn btn-app bg-teal"><i class="fas fa-file-image"></i> Image<img src="'.Storage::url($attachment->file_path).'" class="d-none"></a>';
                break;

            case 'pdf':
                $output = '<a href="'.Storage::url($attachment->file_path).'" class="btn btn-app bg-teal"><i class="fas fa-file-pdf"></i> PDF<span class="d-none">'.$attachment->file_upload_name.'</span></a>';
                break;
                            
            default:
                $output = '';
                break;
        }

        return $output;
    }

    public static function MasterStatus($department_id = null)
    {
        $departments = [
            "02" => "โรงพยาบาลจุฬาลงกรณ์",
            "03" => "โรงพยาบาลสมเด็จพระบรมราชเทวี ณ ศรีราชา",
            "04" => "สถานเสาวภา",
            "05" => "สำนักงานยุวกาชาด",
            "06" => "สำนักงานอาสากาชาด",
            "07" => "ศูนย์บริการโลหิตแห่งชาติ",
            "08" => "สำนักงานบรรเทาทุกข์และประชานามัยพิทักษ์",
            "09" => "สำนักงานจัดหารายได้",
            "10" => "สถาบันการพยาบาลศรีสวรินทิรา สภากาชาดไทย",
            "11" => "ศูนย์เวชศาสตร์ฟื้นฟู",
            "12" => "สำนักงานการคลัง",
            "13" => "ศูนย์ดวงตา",
            "14" => "ศูนย์วิจัยโรคเอดส์",
            "15" => "มูลนิธิสงเคราะห์เด็กของสภากาชาดไทย",
            "16" => "สำนักงานบริหารทรัพยากรบุคคล",
            "17" => "สำนักงานบริหารกลาง",
            "171" => "สำนักวิเทศสัมพันธ์",
            "172" => "สำนักสารนิเทศและสื่อสารองค์กร",
            "18" => "สำนักงานโภชนาการสวนจิตรลดา",
            "19" => "ศูนย์รับบริจาคอวัยวะ",
            "20" => "สำนักงานจัดการทรัพย์สิน",
            "21" => "สำนักงานเทคโนโลยีสารสนเทศและดิจิทัล",
            "22" => "ศูนย์ฝึกอบรมปฐมพยาบาลและสุขภาพอนามัย",
            "23" => "สำนักงานตรวจสอบ",
            "24" => "สำนักงานบริหารระบบกายภาพ",
            "25" => "สำนักงานบริหารกิจการเหล่ากาชาด",
            "26" => "กลุ่มงานกลยุทธ์องค์กร",
            "261" => "สำนักนโยบายยุทธศาสตร์และงบประมาณ",
            "262" => "สำนักบริหารความเสี่ยงและควบคุมภายใน",
            "263" => "สำนักขับเคลื่อนการพัฒนา",
            "27" => "สำนักกฎหมาย",
        ];

        return $department_id ? $departments[$department_id]:$departments;
    }

    public static function Department($department_id = null)
    {
        $departments = [
            "02" => "โรงพยาบาลจุฬาลงกรณ์",
            "03" => "โรงพยาบาลสมเด็จพระบรมราชเทวี ณ ศรีราชา",
            "04" => "สถานเสาวภา",
            "05" => "สำนักงานยุวกาชาด",
            "06" => "สำนักงานอาสากาชาด",
            "07" => "ศูนย์บริการโลหิตแห่งชาติ",
            "08" => "สำนักงานบรรเทาทุกข์และประชานามัยพิทักษ์",
            "09" => "สำนักงานจัดหารายได้",
            "10" => "สถาบันการพยาบาลศรีสวรินทิรา สภากาชาดไทย",
            "11" => "ศูนย์เวชศาสตร์ฟื้นฟู",
            "12" => "สำนักงานการคลัง",
            "13" => "ศูนย์ดวงตา",
            "14" => "ศูนย์วิจัยโรคเอดส์",
            "15" => "มูลนิธิสงเคราะห์เด็กของสภากาชาดไทย",
            "16" => "สำนักงานบริหารทรัพยากรบุคคล",
            "17" => "สำนักงานบริหารกลาง",
            "171" => "สำนักวิเทศสัมพันธ์",
            "172" => "สำนักสารนิเทศและสื่อสารองค์กร",
            "18" => "สำนักงานโภชนาการสวนจิตรลดา",
            "19" => "ศูนย์รับบริจาคอวัยวะ",
            "20" => "สำนักงานจัดการทรัพย์สิน",
            "21" => "สำนักงานเทคโนโลยีสารสนเทศและดิจิทัล",
            "22" => "ศูนย์ฝึกอบรมปฐมพยาบาลและสุขภาพอนามัย",
            "23" => "สำนักงานตรวจสอบ",
            "24" => "สำนักงานบริหารระบบกายภาพ",
            "25" => "สำนักงานบริหารกิจการเหล่ากาชาด",
            "26" => "กลุ่มงานกลยุทธ์องค์กร",
            "261" => "สำนักนโยบายยุทธศาสตร์และงบประมาณ",
            "262" => "สำนักบริหารความเสี่ยงและควบคุมภายใน",
            "263" => "สำนักขับเคลื่อนการพัฒนา",
            "27" => "สำนักกฎหมาย",
        ];

        return $department_id ? $departments[$department_id]:$departments;
    }

    public static function DataSubjectCid($cid)
    {
        return $cid ?? "-";
    }

    public static function DataSubjectName(Object $data_subject)
    {
        $_text = $data_subject->data_subject_title.$data_subject->data_subject_firstname." ".$data_subject->data_subject_lastname;
        return $_text <> " " ? $_text:"-";
    }

    public static function DataSubjectTelephone($telephone)
    {
        return $telephone ?? "-";
    }

    public static function DataSubjectEmail($email)
    {
        return $email ?? "-";
    }

    public static function NameLogo($user)
    {
        $first = $user->firstname?substr($user->firstname,0,1):'';
        $last = $user->lastname?substr($user->lastname,0,1):'';
        return strtoupper($first.$last);
    }

    public static function Username($user_id)
    {
        $user = User::find($user_id);
        return $user->firstname ?? "-";
    }

    public static function JsonDecode($json, $key1 = null, $key2 = null)
    {
        $array = json_decode($json, JSON_OBJECT_AS_ARRAY);
        if(array_key_exists($key1, $array)) {
            return $array[$key1][$key2];
        }
        return null;
    }
}