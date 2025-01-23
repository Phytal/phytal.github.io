import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const EducationCard = () => {
  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>Education</CardTitle>
        <CardDescription>Academic Background</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">The University of Texas at Austin</p>
            <p className="text-muted-foreground">B.S. Computer Science Honors & BBA Business Honors</p>
            <p className="text-sm text-muted-foreground">Expected Graduation: May 2026</p>
          </div>
          <img 
            src="https://www.symbols.com/images/symbol/1/2029_seal-of-the-university-of-texas-austin.png" 
            alt="UT Austin Logo" 
            className="w-24 h-auto"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationCard;