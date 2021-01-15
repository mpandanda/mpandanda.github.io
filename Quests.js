//Quests handling created for PandandaGO!
var dailyQuests = ["Q001a:QI001-1:50:90:,Q001b:QI002-5:60:90:,Q001c:QI003-1:70:110:,Q001d:QI005-1:90:100:,Q001e:QI004-5:70:95:,Q001f:QI021-1^QI022-1^QI023-1^QI024-1^QI025-1:90:90:,Q001g:QI501-5:60:90:,Q001h:QI423-7^QI157-7:80:110:,Q001i:QI007-3^QI011-2^QI012-2:60:85:,Q001j:QI001-3:50:80:,Q001k:QI527-5^QI582-6:80:105:,Q001l:QI519-7:80:90:,Q001m:QI629-5:60:70:,Q001n:QI658-1^QI659-1^QI660-1^QI661-1^QI662-1:70:80:,Q001o:QI661-4^QI011-3^QI001-1:70:80:,Q001p:QI307-3^QI682-2:60:70:,Q001q:QI002-5^QI683-1:60:80:,Q001r:QI220-3^QI203-3^QI202-1:80:80:,Q001s:QI684-5^QI685-3:80:95:", "Q002a:QI101-1^QI102-1:50:90:,Q002b:QI158-2^QI159-2^QI160-2:50:90:,Q002c:QI103-5:50:90:,Q002d:QI105-1^QI106-1^QI107-1^QI108-1:50:90:,Q002f:QI423-5:50:100:,Q002g:QI419-1^QI420-1^QI421-1^QI422-1:50:100:,Q002h:QI461-1:50:75:,Q002i:QI201-1^QI213-2^QI517-2^QI211-3:70:100:,Q002j:QI528-3^QI219-3^QI517-3:80:90:,Q002k:QI520-5:70:85:,Q002l:QI521-1^QI522-1^QI523-1^QI524-1^QI525-1^QI526-1:70:90:,Q002m:QI621-5^QI622-5^QI623-5^QI624-5:70:90:,Q002n:QI644-5:60:75:,Q002o:QI589-4:50:70:,Q002r:QI209-2^QI530-2^QI531-2^QI201-1:60:80:,Q002s:QI688-5:70:80:,Q002t:QI689-1^QI690-1^QI691-1^QI692-1^QI693-1^QI694-1^QI695-1:60:75:,Q002u:QI421-1^QI509-1^QI011-2:70:80:", "Q003a:QI201-1^QI202-1^QI203-3:60:95:,Q003b:QI201-1^QI202-1^QI204-3:60:95:,Q003c:QI201-1^QI202-2^QI205-2:60:100:,Q003d:QI201-1^QI202-1^QI206-3:60:100:,Q003e:QI202-2^QI205-2^QI207-2:60:80:,Q003f:QI220-3^QI202-1^QI201-1:50:105:,Q003k:QI220-2^QI207-3^QI201-2:50:95:,Q003l:QI529-4^QI505-1:70:95:,Q003m:QI006-1^QI013-2^QI014-3:70:95:,Q003n:QI216-2^QI202-1^QI217-1^QI214-2:75:100:,Q003o:QI530-2^QI531-2^QI532-2:100:110:,Q003p:QI643-1^QI632-5^QI304-2:100:80:,Q003q:QI645-5:70:80:,Q003r:QI416-1^QI534-3^QI533-2^QI512-2:70:85:,Q003s:QI589-5^QI201-1^QI202-1:80:90:,Q003t:QI696-1^QI697-1^QI698-1:80:85:,Q003u:QI515-5^QI516-5^QI699-5:90:90:,Q003v:QI700-1^QI701-1^QI702-1^QI703-1^QI704-1:80:80:", "Q004a:QI110-2^QI111-2^QI112-2^QI113-2:50:90:,Q004b:QI114-2^QI115-2^QI116-2^QI117-2:50:110:,Q004c:QI118-2^QI119-2^QI120-2^QI121-2:50:80:,Q004d:QI122-3^QI123-3^QI124-1^QI125-1:50:90:,Q004e:QI126-2^QI127-2^QI128-2^QI129-2:50:100:,Q004f:QI528-2^QI206-2^QI518-2^QI211-2:70:95:,Q004g:QI533-1^QI217-2^QI512-2^QI534-2:70:90:,Q004h:QI535-2^QI215-3:50:75:,Q004i:QI220-5^QI212-5^QI221-2^QI209-2:80:100:,Q004j:QI536-1^QI537-1^QI538-1^QI539-1^QI540-1^QI541-1^QI542-1^QI543-1^QI544-1^QI545-1:90:100:,Q004k:QI589-4^QI201-1^QI202-1:60:80:,Q004l:QI705-5:50:70:,Q004m:QI705-5^QI706-5:70:90:,Q004p:QI708-1^QI709-1^QI710-1^QI711-1^QI712-1^QI713-1:80:95:,Q004q:QI714-1^QI715-5:80:90:,Q004r:QI534-2^QI214-1^QI208-1^QI533-3:90:95:", "Q005a:QI130-2^QI131-2^QI132-1^QI133-1^QI134-1:50:90:,Q005b:QI140-1^QI141-1^QI142-1^QI143-1^QI144-1^QI145-1:50:75:,Q005c:QI145-1^QI146-1^QI147-1^QI148-1:50:75:,Q005d:QI150-1^QI151-1^QI152-1^QI153-1^QI154-1:50:80:,Q005e:QI155-1^QI156-1^QI157-1:50:80:,Q005f:QI546-2^QI547-2^QI548-2:50:80:,Q005g:QI105-1^QI106-1^QI107-1^QI108-1^QI109-1^QI124-5^QI125-5:80:100:,Q005h:QI549-5^QI550-5^QI580-5^QI581-5:90:110:,Q005i:QI220-5^QI212-5^QI215-5:60:90:,Q005j:QI551-1^QI552-1^QI553-1^QI554-1^QI555-1^QI556-1^QI557-1^QI558-1^QI559-1^QI560-1^QI561-1^QI562-1^QI563-1^QI564-1^QI565-1:90:100:,Q005k:QI447-1^QI448-1:50:75:,Q005o:QI123-4:60:70:,Q005p:QI722-5:60:70:,Q005q:QI723-2^QI724-1^QI725-1^QI726-3^QI727-2^QI728-3:80:90:,Q005r:QI717-5:70:80:,Q005s:QI716-5^QI718-1^QI719-1^QI720-1:80:90:,Q005t:QI721-4^QI719-1^QI720-1:80:90:", "Q006a:QI301-3^QI303-1:50:95:,Q006b:QI302-3^QI307-1:50:70:,Q006c:QI303-5:50:80:,Q006d:QI304-3^QI307-2:50:110:,Q006e:QI305-3^QI306-2:50:90:,Q006f:QI566-1:250:85:,Q006g:QI004-3^QI005-2:90:100:,Q006h:QI567-3^QI236-3:70:90:,Q006i:QI903-1^QI904-1^QI905-1^QI906-1^QI907-1:70:85:,Q006j:QI305-2^QI306-2^QI301-3:60:85:,Q006k:QI646-1^QI647-5^QI648-5^QI649-5^QI650-4:100:100:,Q006l:QI307-5^QI303-5^QI730-1^QI731-1^QI732-1^QI733-1^QI734-1:90:90:,Q006m:QI735-1^QI736-1^QI737-1:70:80:,Q006q:QI301-5^QI303-5:70:80:,Q006r:QI103-5^QI742-5:60:70:", "Q007a:QI208-1^QI209-2^QI213-2:60:95:,Q007b:QI212-3^QI208-1^QI209-1:60:95:,Q007c:QI208-1^QI209-2^QI211-2:60:100:,Q007d:QI208-1^QI209-1^QI210-3:60:100:,Q007e:QI214-3^QI208-1^QI209-1:60:105:,Q007f:QI215-1^QI216-2^QI217-2:50:110:,Q007i:QI218-3^QI214-2^QI208-1:70:90:,Q007j:QI209-2^QI211-3^QI208-1:80:95:,Q007k:QI486-7:70:85:,Q007l:QI245-5^QI244-5:75:90:,Q007m:QI205-3^QI218-2:60:85:,Q007n:QI632-5^QI631-1:100:90:,Q007o:QI678-1:70:90:,Q007p:QI103-4^QI762-3:70:90:,Q007q:QI534-3^QI216-3^QI512-4:80:80:,Q007r:QI758-3^QI759-3^QI760-3:70:85:,Q007s:QI761-5:70:80:,Q007t:QI534-2^QI630-2:70:70:", "Q008a:QI006-2^QI007-2^QI008-1:50:95:,Q008b:QI008-1^QI013-3^QI011-1:50:95:,Q008c:QI009-2^QI007-2^QI014-1:50:90:,Q008d:QI011-1^QI010-2^QI006-1:50:110:,Q008e:QI006-2^QI014-3:50:95:,Q008f:QI105-1^QI106-1^QI107-1^QI108-1^QI109-1:80:95:,Q008g:QI124-3^QI125-2^QI444-3^QI505-1:75:90:,Q008h:QI515-5^QI516-5:70:95:,Q008i:QI514-3^QI531-3^QI532-3:65:85:,Q008j:QI529-5^QI568-1:75:90:,Q008k:QI569-2^QI571-2^QI572-2:60:80:,Q008l:QI630-4^QI002-3^QI533-2^QI534-2:80:95:,Q008m:QI633-1^QI657-1:70:70:,Q008n:QI609-3^QI505-1:70:80:,Q008o:QI568-1^QI588-5:70:75:,Q008p:QI588-5^QI201-1^QI202-2:80:80:,Q008q:QI207-5^QI212-5^QI444-3:70:80:,Q008r:QI470-1^QI471-1^QI472-1^QI473-1^QI474-1^QI475-1^QI610-5:80:80:", "Q009a:QI231-1^QI232-1^QI233-1^QI234-1^QI235-1:50:95:,Q009b:QI236-3^QI237-2:50:95:,Q009c:QI238-1^QI239-1^QI240-1^QI241-1^QI242-1^QI243-1:50:85:,Q009d:QI213-3^QI216-2:50:85:,Q009e:QI244-2^QI214-1^QI211-3:75:80:,Q009f:QI573-5^QI583-5:70:90:,Q009g:QI913-3^QI914-3^QI915-3:60:85:,Q009h:QI574-5^QI584-5^QI585-5:70:90:,Q009i:QI155-5^QI586-5:70:90:,Q009j:QI633-1:50:80:,Q009k:QI211-5^QI221-1^QI209-2^QI208-1:80:85:,Q009o:QI771-1^QI772-1^QI773-1^QI774-1^QI775-1:80:80:,Q009p:QI574-5^QI423-5:70:80:,Q009q:QI632-5^QI631-1:70:75:,Q009r:QI443-5^QI763-1^QI506-1:70:80:,Q009s:QI764-1^QI765-1^QI766-1^QI767-1^QI768-1^QI769-1^QI770-1:80:80:", "Q019a:QI411-2^QI412-1^QI413-1^QI414-1^QI415-1^QI406-1^QI407-1^QI408-1^QI409-1^QI410-1:80:100:,Q019c:QI108-1^QI505-1^QI124-2^QI125-2^QI576-1:80:90:,Q019d:QI577-1^QI578-1^QI579-1^QI406-1^QI407-1:70:90:,Q019e:QI625-3^QI626-3^QI627-3^QI628-3:80:80:,Q019f:QI657-1^QI776-1^QI777-1^QI778-1^QI779-1:75:80:,Q019g:QI103-5^QI588-5^QI623-3^QI637-1^QI416-1:75:80:,Q019h:QI534-5^QI630-5:75:80:,Q019i:QI421-1^QI422-1^QI903-1^QI904-1^QI588-2:80:80:,Q019m:QI486-5^QI103-5:70:80:", "Q031a:QI611-5:70:90:,Q031d:QI103-4^QI571-3^QI621-1^QI220-1:75:85:GI704,Q031e:QI501-3^QI238-1^QI239-1^QI240-1^QI241-1^QI242-1^QI243-1^QI634-1:150:100:,Q031f:QI635-5:60:75:,Q031g:QI202-1^QI304-3^QI302-2:90:80:,Q031h:QI656-1^QI657-1:70:70:,Q031i:QI506-1^QI505-1^QI909-3:70:80:,Q031j:QI218-5:60:75:,Q031m:QI782-5^QI783-5^QI784-5:70:80:,Q031q:QI787-1^QI788-1^QI484-1:75:80:,Q031r:QI218-3^QI518-3^QI486-3:80:80:,Q031s:QI789-1^QI790-1^QI791-1^QI792-1:75:85:"];
var festivalQuests = { "pumpkin": ["Q051a:QI411-5:50:120:", "Q051b:QI406-1^QI407-1^QI408-1^QI409-1^QI410-1:50:120:", "Q051c:QI412-1^QI413-1^QI414-1^QI415-1^QI416-1:50:120:", "Q051d:QI401-5:50:120:", "Q051e:QI402-5:50:120:", "Q051f:QI403-5:50:120:"], "winter": ["Q055a:QI418-5:50:90:", "Q055b:QI219-4^QI213-3^QI417-1:50:100:", "Q055c:QI218-3^QI417-1:60:90:", "Q055d:QI441-5:50:85:"], "christmas": ["Q056a:QI424-1^QI425-1^QI426-1^QI427-1^QI428-1^QI429-1:60:95:", "Q056b:QI436-1^QI437-2^QI438-1^QI439-2^QI440-1:60:110:", "Q056c:QI430-1^QI431-1^QI432-1^QI433-1^QI434-1^QI435-1:60:115:"], "snowmen": ["Q060a:QI442-5:50:85:", "Q060b:QI443-3^QI444-4:50:90:", "Q061a:QI445-2^QI446-2^QI447-2^QI448-2:60:80:", "Q061b:QI449-1^QI450-1^QI451-1^QI452-1^QI453-1:60:85:", "Q061c:QI454-1^QI455-1^QI456-1^QI457-1^QI458-1:70:105:"], "tropical": ["Q062a:QI460-5:60:85:", "Q062b:QI461-3:50:75:", "Q062c:QI462-1^QI463-1^QI464-1^QI465-1^QI466-1:60:90:", "Q062d:QI609-5^QI610-5^QI213-5:70:90:", "Q062e:QI609-3^QI145-1^QI146-1^QI201-1^QI211-3:60:80:", "Q062f:QI609-5^QI201-3:50:60:", "Q062g:QI609-5^QI909-3:50:65:"], "friendship": ["Q063a:QI470-1^QI471-1^QI472-1^QI473-1^QI474-1^QI475-1:60:100:", "Q063b:QI482-1:50:85:", "Q063c:QI483-1^QI484-1:60:95:", "Q063d:QI476-1^QI477-1^QI478-1^QI479-1^QI480-1^QI481-1:50:75:", "Q064a:QI485-1^QI486-5:70:105:", "Q064b:QI494-5:50:85:", "Q064c:QI488-1^QI489-1^QI490-1^QI491-1^QI492-1^QI493-1:50:95:"], "easter": ["Q040a:QI209-5^QI515-5:80:125:", "Q040b:QI423-6:60:90:", "Q040c:QI118-4:50:80:", "Q040d:QI514-5:50:85:", "Q040e:QI158-1^QI159-2^QI160-3:70:90:", "Q040f:QI516-4:50:80:", "Q040g:QI118-2^QI119-1^QI120-2^QI121-1:60:85:", "Q040h:QI507-1^QI508-1^QI509-1^QI514-3:70:95:"], "football": ["Q1806a:QI729-5^QI505-1:80:90:", "Q1806b:QI722-5:60:75:", "Q1806c:QI730-1^QI731-1^QI732-1^QI733-1^QI734-1:70:80:", "Q1806d:QI663-1^QI664-1^QI665-1^QI667-1^QI668-1^QI669-1^QI670-1^QI671-1^QI672-1^QI673-1^QI674-1^QI675-1^QI676-1^QI677-1:90:100:", "Q1806e:QI444-3^QI580-2^QI581-4:80:90:"], "candy": ["Q1901a:QI202-1^QI201-1^QI402-4:60:75:", "Q1901b:QI403-4^QI158-3^QI159-3:70:70:", "Q1901c:QI401-5:60:70:", "Q1901d:QI202-2^QI221-2^QI204-5:70:80:", "Q1901e:QI213-5^QI211-5^QI705-5:80:80:", "Q1901f:QI201-1^QI706-5^QI202-1^QI630-2:70:80:"] };
var questsAvailable = "Q001a:QI001-1:50:90:,Q001b:QI002-5:60:90:,Q001c:QI003-1:70:110:,Q001d:QI005-1:90:100:,Q001e:QI004-5:70:95:,Q001f:QI021-1^QI022-1^QI023-1^QI024-1^QI025-1:90:90:,Q006a:QI301-3^QI303-1:50:95:,Q007a:QI208-1^QI209-2^QI213-2:60:95:,Q004a:QI110-2^QI111-2^QI112-2^QI113-2:50:90:,Q005a:QI130-2^QI131-2^QI132-1^QI133-1^QI134-1:50:90:,Q009a:QI231-1^QI232-1^QI233-1^QI234-1^QI235-1:50:95:,Q002a:QI101-1^QI102-1:50:90:,Q008a:QI006-2^QI007-2^QI008-1:50:95:,Q003a:QI201-1^QI202-1^QI203-3:60:95:,Q101:QI109-1:50:90:,Q110a:QI901-1:0:0:,Q110b:QI902-1:0:0:,Q110c:QI903-1^QI904-1^QI905-1^QI906-1^QI907-1:0:0:,Q110d:QI908-1:0:0:,Q110e:QI909-3:0:0:,Q110f:QI910-1:0:0:,Q110g:QI911-1:0:0:,Q110h:QI912-1:0:0:,Q110i:QI913-3^QI914-2^QI915-2:0:0:,Q110j:QI916-1:0:0:,Q110k:QI917-1:0:0:,Q110l:QI918-1:0:0:,Q111:QI920-1:100:5:M010a,Q112:QI921-1:100:5:M010b,Q1337a:QI106-1^QI107-1^QI108-1:300:200:C557b,Q018a:QI497-1^QI498-1^QI499-1:100:120:,Q018b:QI206-4^QI501-1^QI495-1:100:120:,Q018c:QI496-1:100:120:,Q003g:QI502-1:180:180:,Q003h:QI214-2^QI202-1^QI201-1^QI203-3^QI207-3^QI209-2:180:180:,Q003i:QI503-1:180:180:,Q003j:QI504-1:180:180:,Q002b:QI158-2^QI159-2^QI160-2:50:80:,Q002c:QI103-5:50:90:,Q002d:QI105-1^QI106-1^QI107-1^QI108-1:50:90:,Q002f:QI423-5:50:100:,Q002g:QI419-1^QI420-1^QI421-1^QI422-1:50:100:,Q003b:QI201-1^QI202-1^QI204-3:60:95:,Q003c:QI201-1^QI202-2^QI205-2:60:100:,Q003d:QI201-1^QI202-1^QI206-3:60:100:,Q003e:QI202-2^QI205-2^QI207-2:60:80:,Q003f:QI220-3^QI202-1^QI201-1:50:105:,Q004b:QI114-2^QI115-2^QI116-2^QI117-2:50:110:,Q004c:QI118-2^QI119-2^QI120-2^QI121-2:50:80:,Q004d:QI122-3^QI123-3^QI124-1^QI125-1:50:90:,Q004e:QI126-2^QI127-2^QI128-2^QI129-2:50:100:,Q005b:QI140-1^QI141-1^QI142-1^QI143-1^QI144-1^QI145-1:50:75:,Q005c:QI145-1^QI146-1^QI147-1^QI148-1:50:75:,Q005d:QI150-1^QI151-1^QI152-1^QI153-1^QI154-1:50:80:,Q005e:QI155-1^QI156-1^QI157-1:50:80:,Q006b:QI302-3^QI307-1:50:70:,Q006c:QI303-5:50:80:,Q006d:QI304-3^QI307-2:50:110:,Q006e:QI305-3^QI306-2:50:90:,Q007b:QI212-3^QI208-1^QI209-1:60:95:,Q007c:QI208-1^QI209-2^QI211-2:60:100:,Q007d:QI208-1^QI209-1^QI210-3:60:100:,Q007e:QI214-3^QI208-1^QI209-1:60:105:,Q007f:QI215-1^QI216-2^QI217-2:50:110:,Q008b:QI008-1^QI013-3^QI011-1:50:95:,Q008c:QI009-2^QI007-2^QI014-1:50:90:,Q008d:QI011-1^QI010-2^QI006-1:50:110:,Q008e:QI006-2^QI014-3:50:95:,Q009b:QI236-3^QI237-2:50:95:,Q009c:QI238-1^QI239-1^QI240-1^QI241-1^QI242-1^QI243-1:50:85:,Q009d:QI213-3^QI216-2:50:85:,Q051a:QI411-5:50:120:,Q051b:QI406-1^QI407-1^QI408-1^QI409-1^QI410-1:50:120:,Q051c:QI412-1^QI413-1^QI414-1^QI415-1^QI416-1:50:120:,Q051d:QI401-5:50:120:,Q051e:QI402-5:50:120:,Q051f:QI403-5:50:120:,Q055a:QI418-5:50:90:,Q055b:QI219-4^QI213-3^QI417-1:50:100:,Q055c:QI218-3^QI417-1:60:90:,Q055d:QI441-5:50:85:,Q056a:QI424-1^QI425-1^QI426-1^QI427-1^QI428-1^QI429-1:60:95:,Q056b:QI436-1^QI437-2^QI438-1^QI439-2^QI440-1:60:110:,Q056c:QI430-1^QI431-1^QI432-1^QI433-1^QI434-1^QI435-1:60:115:,Q060a:QI442-5:50:85:,Q060b:QI443-3^QI444-4:50:90:,Q061a:QI445-2^QI446-2^QI447-2^QI448-2:60:80:,Q061b:QI449-1^QI450-1^QI451-1^QI452-1^QI453-1:60:85:,Q061c:QI454-1^QI455-1^QI456-1^QI457-1^QI458-1:70:105:,Q062a:QI460-5:60:85:,Q062b:QI461-3:50:75:,Q062c:QI462-1^QI463-1^QI464-1^QI465-1^QI466-1:60:90:,Q063a:QI470-1^QI471-1^QI472-1^QI473-1^QI474-1^QI475-1:60:100:,Q063b:QI482-1:50:85:,Q063c:QI483-1^QI484-1:60:95:,Q063d:QI476-1^QI477-1^QI478-1^QI479-1^QI480-1^QI481-1:50:75:,Q064a:QI485-1^QI486-5:70:105:,Q064b:QI494-5:50:85:,Q064c:QI488-1^QI489-1^QI490-1^QI491-1^QI492-1^QI493-1:50:95:,Q001g:QI501-5:60:90:,Q001h:QI423-7^QI157-7:80:110:,Q010a:QI909-3^QI506-3:300:200:,Q010b:QI505-1:300:200:F057,Q007g:QI216-5^QI512-5^QI513-5:100:200:,Q007h:QI507-1^QI508-1^QI509-1^QI510-1^QI511-1:100:200:,Q003k:QI220-2^QI207-3^QI201-2:50:95:,Q040a:QI209-5^QI515-5:80:125:,Q040b:QI423-6:60:90:,Q040c:QI118-4:50:80:,Q040d:QI514-5:50:85:,Q040e:QI158-1^QI159-2^QI160-3:70:90:,Q040f:QI516-4:50:80:,Q040g:QI118-2^QI119-1^QI120-2^QI121-1:60:85:,Q040h:QI507-1^QI508-1^QI509-1^QI514-3:70:95:,Q001i:QI007-3^QI011-2^QI012-2:60:85:,Q001j:QI001-3:50:80:,Q001k:QI527-5^QI582-6:80:105:,Q001l:QI519-7:80:90:,Q002h:QI461-1:50:75:,Q002i:QI201-1^QI213-2^QI517-2^QI211-3:70:100:,Q002j:QI528-3^QI219-3^QI517-3:80:90:,Q002k:QI520-5:70:85:,Q002l:QI521-1^QI522-1^QI523-1^QI524-1^QI525-1^QI526-1:70:90:,Q003l:QI529-4^QI505-1:70:95:,Q003m:QI006-1^QI013-2^QI014-3:70:95:,Q003n:QI216-2^QI202-1^QI217-1^QI214-2:75:100:,Q003o:QI530-2^QI531-2^QI532-2:100:110:,Q004f:QI528-2^QI206-2^QI518-2^QI211-2:70:95:,Q004g:QI533-1^QI217-2^QI512-2^QI534-2:70:90:,Q004h:QI535-2^QI215-3:50:75:,Q004i:QI220-5^QI212-5^QI221-2^QI209-2:80:100:,Q004j:QI536-1^QI537-1^QI538-1^QI539-1^QI540-1^QI541-1^QI542-1^QI543-1^QI544-1^QI545-1:90:100:,Q005f:QI546-2^QI547-2^QI548-2:50:80:,Q005g:QI105-1^QI106-1^QI107-1^QI108-1^QI109-1^QI124-5^QI125-5:80:100:,Q005h:QI549-5^QI550-5^QI580-5^QI581-5:90:110:,Q005i:QI220-5^QI212-5^QI215-5:60:90:,Q005j:QI551-1^QI552-1^QI553-1^QI554-1^QI555-1^QI556-1^QI557-1^QI558-1^QI559-1^QI560-1^QI561-1^QI562-1^QI563-1^QI564-1^QI565-1:90:100:,Q005k:QI447-1^QI448-1:50:75:,Q006f:QI566-1:250:85:,Q006g:QI004-3^QI005-2:90:100:,Q006h:QI567-3^QI236-3:70:90:,Q006i:QI903-1^QI904-1^QI905-1^QI906-1^QI907-1:70:85:,Q006j:QI305-2^QI306-2^QI301-3:60:85:,Q007i:QI218-3^QI214-2^QI208-1:70:90:,Q007j:QI209-2^QI211-3^QI208-1:80:95:,Q007k:QI486-7:70:85:,Q007l:QI245-5^QI244-5:75:90:,Q007m:QI205-3^QI218-2:60:85:,Q008f:QI105-1^QI106-1^QI107-1^QI108-1^QI109-1:80:95:,Q008g:QI124-3^QI125-2^QI444-3^QI505-1:75:90:,Q008h:QI515-5^QI516-5:70:95:,Q008i:QI514-3^QI531-3^QI532-3:65:85:,Q008j:QI529-5^QI568-1:75:90:,Q008k:QI569-2^QI571-2^QI572-2:60:80:,Q009e:QI244-2^QI214-1^QI211-3:75:80:,Q009f:QI573-5^QI583-5:70:90:,Q009g:QI913-3^QI914-3^QI915-3:60:85:,Q009h:QI574-5^QI584-5^QI585-5:70:90:,Q009i:QI155-5^QI586-5:70:90:,Q019a:QI411-2^QI412-1^QI413-1^QI414-1^QI415-1^QI406-1^QI407-1^QI408-1^QI409-1^QI410-1:80:100:,Q019b:QI104-2^QI518-3^QI575-1:70:85:,Q019c:QI108-1^QI505-1^QI124-2^QI125-2^QI576-1:80:90:,Q019d:QI577-1^QI578-1^QI579-1^QI406-1^QI407-1:70:90:,Q113:QI587-1:0:0:,Q706a:QI588-3:0:0:,Q706b:QI567-3^QI145-1^QI146-1^QI147-1^QI148-1^QI589-4:0:0:,Q706c:QI590-1:0:0:,Q706d:QI591-1:0:0:,Q706e:QI592-1:150:100:,Q201706a:QI150-1:0:0:,Q201706b:QI593-1:0:0:,Q201706c:QI594-1:0:0:,Q1706a:QI588-7:70:95:,Q1706b:QI304-3^QI306-2^QI103-5:60:80:,Q1706c:QI244-2^QI206-2^QI588-2:60:90:,Q1706d:QI202-1^QI201-1^QI207-5:70:100:,Q1706e:QI208-1^QI201-1^QI588-2:50:75:,Q201707a:QI595-1:0:0:C458f,Q201707b:QI596-1^QI597-1^QI598-1^QI599-1^QI600-1^QI601-1^QI602-1^QI603-1^QI604-1^QI605-1:0:0:BG080,Q201707c:QI606-1:0:0:C571,Q201707d:QI607-1:0:0:C572a,Q201707e:QI607-1:0:0:C403c,Q201707f:QI150-1^QI151-1^QI152-1^QI153-1^QI154-1:0:0:C474a,Q201707g:QI608-1:0:0:C459c,Q062d:QI609-5^QI610-5^QI213-5:70:90:,Q062e:QI609-3^QI145-1^QI146-1^QI201-1^QI211-3:60:80:,Q062f:QI609-5^QI201-3:50:60:,Q062g:QI609-5^QI909-3:50:65:,Q031a:QI611-5:70:90:,Q031b:QI612-1^QI613-1^QI614-1^QI615-1^QI616-1^QI617-1:100:100:,Q031c:QI145-1^QI147-1^QI618-1^QI619-1^QI620-1:100:100:,Q002m:QI621-5^QI622-5^QI623-5^QI624-5:70:90:,Q019e:QI625-3^QI626-3^QI627-3^QI628-3:80:80:,Q031d:QI103-4^QI571-3^QI621-1^QI220-1:75:85:GI704,Q001m:QI629-5:60:70:,Q009j:QI633-1:50:80:,Q007n:QI632-5^QI631-1:100:90:,Q008l:QI630-4^QI002-3^QI533-2^QI534-2:80:95:,Q004k:QI589-4^QI201-1^QI202-1:60:80:,Q031e:QI501-3^QI238-1^QI239-1^QI240-1^QI241-1^QI242-1^QI243-1^QI634-1:150:100:,Q031f:QI635-5:60:75:,Q005l:QI636-1:90:100:,Q005m:QI632-5:90:100:,Q005n:QI637-1^QI638-4^QI639-1^QI640-1^QI641-1^QI642-1:90:100:,Q003p:QI643-1^QI632-5^QI304-2:100:80:,Q002n:QI644-5:60:75:,Q031g:QI202-1^QI304-3^QI302-2:90:80:,Q003q:QI645-5:70:80:,Q006k:QI646-1^QI647-5^QI648-5^QI649-5^QI650-4:100:100:,Q009k:QI211-5^QI221-1^QI209-2^QI208-1:80:85:,Q009l:QI651-1^QI652-1^QI653-1^QI654-1:90:100:,Q009m:QI636-1:90:100:,Q009n:QI655-1:90:100:,Q031h:QI656-1^QI657-1:70:70:,Q005o:QI123-4:60:70:,Q031i:QI506-1^QI505-1^QI909-3:70:80:,Q031j:QI218-5:60:75:,Q001n:QI658-1^QI659-1^QI660-1^QI661-1^QI662-1:70:80:,Q002o:QI589-4:50:70:,Q031k:QI663-1^QI664-1^QI665-1^QI667-1^QI668-1^QI669-1^QI670-1^QI671-1^QI672-1^QI673-1^QI674-1^QI675-1^QI676-1^QI677-1:90:100:,Q031l:QI443-5^QI501-5:90:100:,Q007o:QI678-1:70:90:,Q201803:QI679-1^QI680-1^QI681-1:80:90:,Q1806a:QI729-5^QI505-1:80:90:,Q1806b:QI722-5:60:75:,Q1806c:QI730-1^QI731-1^QI732-1^QI733-1^QI734-1:70:80:,Q1806d:QI663-1^QI664-1^QI665-1^QI667-1^QI668-1^QI669-1^QI670-1^QI671-1^QI672-1^QI673-1^QI674-1^QI675-1^QI676-1^QI677-1:90:100:,Q1806e:QI444-3^QI580-2^QI581-4:80:90:,Q001o:QI661-4^QI011-3^QI001-1:70:80:,Q001p:QI307-3^QI682-2:60:70:,Q001q:QI002-5^QI683-1:60:80:,Q001r:QI220-3^QI203-3^QI202-1:80:80:,Q001s:QI684-5^QI685-3:80:95:,Q002p:QI687-5^QI682-1:80:95:,Q002q:QI686-1:80:95:,Q002r:QI209-2^QI530-2^QI531-2^QI201-1:60:80:,Q002s:QI688-5:70:80:,Q002t:QI689-1^QI690-1^QI691-1^QI692-1^QI693-1^QI694-1^QI695-1:60:75:,Q002u:QI421-1^QI509-1^QI011-2:70:80:,Q003r:QI416-1^QI534-3^QI533-2^QI512-2:70:85:,Q003s:QI589-5^QI201-1^QI202-1:80:90:,Q003t:QI696-1^QI697-1^QI698-1:80:85:,Q003u:QI515-5^QI516-5^QI699-5:90:90:,Q003v:QI700-1^QI701-1^QI702-1^QI703-1^QI704-1:80:80:,Q004l:QI705-5:50:70:,Q004m:QI705-5^QI706-5:70:90:,Q004n:QI216-4^QI512-4^QI513-4:75:90:,Q004o:QI707-1:75:90:,Q004p:QI708-1^QI709-1^QI710-1^QI711-1^QI712-1^QI713-1:80:95:,Q004q:QI714-1^QI715-5:80:90:,Q004r:QI534-2^QI214-1^QI208-1^QI533-3:90:95:,Q005p:QI722-5:60:70:,Q005q:QI723-2^QI724-1^QI725-1^QI726-3^QI727-2^QI728-3:80:90:,Q005r:QI717-5:70:80:,Q005s:QI716-5^QI718-1^QI719-1^QI720-1:80:90:,Q005t:QI721-4^QI719-1^QI720-1:80:90:,Q006l:QI307-5^QI303-5^QI730-1^QI731-1^QI732-1^QI733-1^QI734-1:90:90:,Q006m:QI735-1^QI736-1^QI737-1:70:80:,Q006n:QI237-3:90:100:,Q006o:QI738-1^QI739-1:90:100:,Q006p:QI741-1:90:100:,Q006q:QI301-5^QI303-5:70:80:,Q006r:QI103-5^QI742-5:60:70:,Q201807a:QI743-1^QI744-1:0:0:C594,Q201807b:QI745-1^QI746-1:0:0:BG035,Q201807c:QI747-1^QI748-1:0:0:C595,Q201807d:QI749-1^QI750-1:0:0:F059,Q201807e:QI751-1^QI752-1:0:0:C596,Q201807f:QI753-1^QI754-1:0:0:C561e,Q201807g:QI757-1^QI755-5^QI756-5:5000:5000:C597,Q007p:QI103-4^QI762-3:70:90:,Q007q:QI534-3^QI216-3^QI512-4:80:80:,Q007r:QI758-3^QI759-3^QI760-3:70:85:,Q007s:QI761-5:70:80:,Q007t:QI534-2^QI630-2:70:70:,Q008m:QI633-1^QI657-1:70:70:,Q008n:QI609-3^QI505-1:70:80:,Q008o:QI568-1^QI588-5:70:75:,Q008p:QI588-5^QI201-1^QI202-2:80:80:,Q008q:QI207-5^QI212-5^QI444-3:70:80:,Q008r:QI470-1^QI471-1^QI472-1^QI473-1^QI474-1^QI475-1^QI610-5:80:80:,Q009o:QI771-1^QI772-1^QI773-1^QI774-1^QI775-1:80:80:,Q009p:QI574-5^QI423-5:70:80:,Q009q:QI632-5^QI631-1:70:75:,Q009r:QI443-5^QI763-1^QI506-1:70:80:,Q009s:QI764-1^QI765-1^QI766-1^QI767-1^QI768-1^QI769-1^QI770-1:80:80:,Q019f:QI657-1^QI776-1^QI777-1^QI778-1^QI779-1:75:80:,Q019g:QI103-5^QI588-5^QI623-3^QI637-1^QI416-1:75:80:,Q019h:QI534-5^QI630-5:75:80:,Q019i:QI421-1^QI422-1^QI903-1^QI904-1^QI588-2:80:80:,Q019j:QI002-5:80:90:,Q019k:QI780-1:80:90:,Q019l:QI781-1:80:90:,Q019m:QI486-5^QI103-5:70:80:,Q031m:QI782-5^QI783-5^QI784-5:70:80:,Q031n:QI785-1:80:90:,Q031o:QI786-1:80:90:,Q031p:QI443-3^QI505-1:80:90:,Q031q:QI787-1^QI788-1^QI484-1:75:80:,Q031r:QI218-3^QI518-3^QI486-3:80:80:,Q031s:QI789-1^QI790-1^QI791-1^QI792-1:75:85:,Q1901a:QI202-1^QI201-1^QI402-4:60:75:,Q1901b:QI403-4^QI158-3^QI159-3:70:70:,Q1901c:QI401-5:60:70:,Q1901d:QI202-2^QI221-2^QI204-5:70:80:,Q1901e:QI213-5^QI211-5^QI705-5:80:80:,Q1901f:QI201-1^QI706-5^QI202-1^QI630-2:70:80:,Q1904a:QI793-2^QI909-4:80:90:C666f,Q1904b:QI909-4^QI730-1^QI731-1^QI732-1^QI733-1^QI734-1^QI505-1:80:90:F060gk,Q1904c:QI730-1^QI731-1^QI732-1^QI657-1:80:90:F230dc,Q1904d:QI794-1^QI795-1^QI796-1^QI797-1:80:90:C471j,Q1904e:QI798-1^QI799-1^QI800-1^QI801-1^QI802-1^QI632-3^QI776-1^QI777-1^QI778-1:80:90:F117fe,Q1904f:QI803-1^QI804-1:80:90:C667,Q1904g:QI805-1^QI806-1^QI807-1^QI808-1^QI809-1^QI810-1^QI811-1^QI812-1^QI813-1^QI814-1:80:90:C668,Q1904h:QI574-5^QI568-1:80:90:,Q1904i:QI815-1:80:90:,Q201907a:QI589-5^QI506-1^QI505-1:0:0:C678,Q201907b:QI816-5^QI817-5^QI818-5^QI819-5:0:0:C676n,Q201907c:QI820-5^QI821-5^QI822-5:0:0:C677a,Q201907d:QI104-5^QI645-5:0:0:F413m,Q201907e:QI611-5^QI683-5:0:0:C673,Q201907f:QI743-1^QI744-1^QI745-1^QI746-1^QI747-1^QI748-1^QI749-1^QI750-1^QI751-1^QI752-1^QI753-1^QI754-1:0:0:C674a,Q201907g:QI443-3^QI705-5^QI715-5:5000:5000:C675"

function removeFestivalQuests()
{
	if(getCookie("qAvailable"))
	{
		var qAvail = getCookie("qAvailable").split(",");
		while(Number(qAvail[qAvail.length - 1].split(":")[0].substr(1, 3)) > 31) qAvail.splice(qAvail.length - 1, 1);
		setCookie("qAvailable", qAvail.join(","), 3000);
	}
}
function pushFestivalQuests()
{
	if(document.getElementById("partySwitcher").value.split("|")[2])
	{
		var festivalName = document.getElementById("partySwitcher").value.split("|")[2];
		var questString = [];
		if(festivalQuests[festivalName].length > 4)
		{
			var firstQuest = festivalQuests[festivalName][Math.floor(Math.random() * festivalQuests[festivalName].length)];
			var secondQuest = festivalQuests[festivalName][Math.floor(Math.random() * festivalQuests[festivalName].length)];
			while(getCookie("qActive").indexOf(firstQuest) != -1) firstQuest = festivalQuests[festivalName][Math.floor(Math.random() * festivalQuests[festivalName].length)];
			while (secondQuest == firstQuest || getCookie("qActive").indexOf(secondQuest) != -1) secondQuest = festivalQuests[festivalName][Math.floor(Math.random() * festivalQuests[festivalName].length)];
			questString.push(firstQuest);
			questString.push(secondQuest);
		}
		else 
		{
			var firstQuest = festivalQuests[festivalName][Math.floor(Math.random() * festivalQuests[festivalName].length)];
			while(getCookie("qActive").indexOf(firstQuest) != -1) firstQuest = festivalQuests[festivalName][Math.floor(Math.random() * festivalQuests[festivalName].length)];
			questString.push(firstQuest);
		}
		setCookie("qAvailable", getCookie("qAvailable") + "," + questString.join(","), 3000);
	}
}
function getAvailableQuests()
{
	var questString = [];
	for(var quest in dailyQuests)
	{
		var npcQuests = dailyQuests[quest].split(",");
		questString.push(npcQuests[Math.floor(Math.random() * npcQuests.length)]);
	}
	return questString.join(",");
}
function selectQuest(id, parameter)
{
	var QuestIndex = questsAvailable.split(",");
	for(i in QuestIndex)
	{
		var questSort = QuestIndex[i].split(":");
		var questId = questSort[0];
		if(questId == id)
		{
			switch (parameter) 
			{
				case('items'): return questSort[1].split("^");
				case('quest'): return QuestIndex[i];
			}
			break;
		}
	}
}
function moveFromAvailable(questid)
{
	var questid = String(questid);
	var qArr = String(getCookie("qAvailable")).split(",");
	var keytoremove;
	if(String(getCookie("qAvailable")).indexOf(questid) != -1)
	{
		for(var key in qArr)
		{
			if(qArr[key].indexOf(questid) != -1)
			{
				keytoremove = key;
				break;
			}
		}
	}
	qArr.splice(keytoremove, 1);
	var qString = qArr.join(",");
	if(qString.indexOf(",") == 0)
	{
		qString = qString.substr(1, qString.length);
	}
	setCookie("qAvailable", qArr.join(","), 3000);
}
function setActive(questid)
{
	var qActives = String(getCookie("qActive")).split(",");
	if(qActives.indexOf(questid) == -1)
	{
		qActives.push(selectQuest(questid, "quest") + ":0");
	}
	var qActivek = qActives.join(",");
	if(qActivek.indexOf(",") == 0)
	{
		qActivek = qActivek.substr(1, qActivek.length);
	}
	setCookie("qActive", qActivek, 3000);
}
function deactivateQuest(questID)
{
	var qActive = String(getCookie("qActive"));
	var QuestIndex = qActive.split(",");
	var keytoremove;
	if(qActive.indexOf(questID) != -1)
	{
		for(var key in QuestIndex)
		{
			if(QuestIndex[key].indexOf(questID) != -1)
			{
				keytoremove = key;
				break;
			}
		}
	}
	QuestIndex.splice(keytoremove, 1);
	var qActiveStr = QuestIndex.join(",");
	if(qActiveStr.indexOf(",") == 0)
	{
		qActiveStr = qActiveStr.substr(1, qActiveStr.length);
	}
	setCookie("qActive", qActiveStr, 3000);
}
function removeQuestItems(questID)
{
	var oserItems = String(getCookie("qItems")).split(",");
	var userActive = String(getCookie("qActive"));
	var DBAvail = questsAvailable;
	var QuestIndex = DBAvail.split(",");
	for(var questk in QuestIndex)
	{
		var qData = QuestIndex[questk].split(":");
		var qID = qData[0];
		if(qID == questID)
		{
			var qIt = qData[1].split("^");
			for(var itm in qIt)
			{
				var itemd = qIt[itm].split("-")[0];
				for(var qItd in oserItems)
				{
					var itemka = oserItems[qItd].split("-")[0];
					if(itemka == itemd && (userActive.split(itemka).length - 1) < 2)
					{
						oserItems.splice(qItd, 1);
					}
					else if(itemka == itemd && Number(oserItems[qItd].split("-")[1]) > Number(qIt[itm].split("-")[1]))
					{
						oserItems[qItd] = itemka + "-" + String(Number(oserItems[qItd].split("-")[1]) - Number(qIt[itm].split("-")[1]));
					}
				}
			}
		}
	}
	oserItems = oserItems.join(",");
	if(oserItems.indexOf(",") == 0)
	{
		oserItems = oserItems.substr(1, oserItems.length);
	}
	setCookie("qItems", oserItems, 3000);
}
function backToAvailable(questID)
{
	var DBAvail = questsAvailable;
	var userActive = String(getCookie("qActive"));
	var QuestIndex = DBAvail.split(",");
	for(i in QuestIndex)
	{
		var questSort = QuestIndex[i].split(":"); // Quest Data Sorter
		var questId = questSort[0];
		var questItems = questSort[1].split("^");
		if(questId == questID)
		{
			var userItems = String(getCookie("qItems")).split(",");
			var questItmRem;
			for(var kay in questItems)
			{
				var qItem = questItems[kay].split("-")[0];
				for(var sheet in userItems)
				{
					var qItemz = userItems[sheet].split("-")[0];
					if(String(qItem) == String(qItemz) && (userActive.split(qItemz).length - 1) < 2)
					{
						userItems.splice(sheet, 1);
					}
				}
			}
			userItems = userItems.join(",");
			if(userItems.indexOf(",") == 0)
			{
				userItems = userItems.substr(1, userItems.length);
			}
			setCookie("qItems", userItems, 3000);
			var qAvail = String(getCookie("qAvailable"));
			if(qAvail == "")
			{
				qAvail = QuestIndex[i];
			}
			else
			{
				qAvail = qAvail + "," + QuestIndex[i];
			}
			setCookie("qAvailable", qAvail, 3000);
			break;
		}
	}
}
function getItemFromQuest(itemID)
{
	var qActive = String(getCookie("qActive")).split(",");
	var qItems = String(getCookie("qItems")).split(",");
	var questsContainingTheseObjectives = [];
	var questListSorted = [];
	for(var i in qActive)
	{
		if(qActive[i].indexOf(itemID) != -1)
		{
			var objectives = qActive[i].split(":")[1].split("^");
			for(var ins in objectives)
			{
				if(objectives[ins].indexOf(itemID) != -1)
				{
					questsContainingTheseObjectives.push(Number(objectives[ins].split("-")[1]));
					questListSorted.push(String(objectives[ins].split("-")[1]) + qActive[i].split(":")[0] + ":" + String(qActive[i].split(":")[5]));
				}
			}
		}
	}
	if(questListSorted.length == 0 || questsContainingTheseObjectives.length == 0)
	{
		return "";
	}
	else
	{
		var objectivesCollected = 0;
		if(String(getCookie("qItems")).indexOf(itemID) != -1)
		{
			for(var lns in qItems)
			{
				if(qItems[lns].indexOf(itemID) != -1)
				{
					objectivesCollected = objectivesCollected + Number(qItems[lns].split("-")[1]);
				}
			}
			for(var qls in questListSorted)
			{
				if(objectivesCollected < questsContainingTheseObjectives[qls] && Number(questListSorted[qls].split(":")[1]) == 0)
				{
					return "Q" + questListSorted[qls].split("Q")[1].split(":")[0] + ":" + String(Number(questsContainingTheseObjectives[qls] - objectivesCollected));
				}
				else
				{
					objectivesCollected = objectivesCollected - questsContainingTheseObjectives[qls];
				}
			}
		}
		else
		{
			return "Q" + questListSorted[0].split("Q")[1].split(":")[0] + ":0";
		}
	}
}
function pushItemToQItems(itemID)
{
	var qItems = String(getCookie("qItems")).split(",");
	if(String(getCookie("qItems")).indexOf(itemID) == -1)
	{
		qItems.push(itemID + "-1");
	}
	else
	{
		for(var item in qItems)
		{
			if(qItems[item].indexOf(itemID) != -1)
			{
				var qItemSpl = qItems[item].split("-");
				qItemSpl[1] = String(Number(qItemSpl[1]) + 1);
				qItemSpl = qItemSpl.join("-");
				qItems[item] = qItemSpl;
				break;
			}
		}
	}
	qItems = qItems.join(",");
	if(qItems.indexOf(",") == 0)
	{
		qItems = qItems.substr(1, qItems.length);
	}
	setCookie("qItems", qItems, 3000);
}
function checkQuestsCompleted(questID)
{
	var qItems = String(getCookie("qItems")).split(",");
	var qActive = String(getCookie("qActive")).split(",");
	if(String(getCookie("qActive")).length > 2)
	{
		var qItemsArray = [];
		var hasChanged = false;
		for(var itemKey in qItems)
		{
			qItemsArray[qItems[itemKey].split("-")[0]] = Number(qItems[itemKey].split("-")[1]);
		}
		for(var i in qActive)
		{
			var activeQId = qActive[i].split(":")[0];
			var activeQObjectives = qActive[i].split(":")[1].split("^");
			var questIncomplete = false;
			for(var qObj in activeQObjectives)
			{
				var objectiveId = activeQObjectives[qObj].split("-")[0];
				var objectiveCount = Number(activeQObjectives[qObj].split("-")[1]);
				var specialQuestObjective = false;
				if(qItemsArray[objectiveId] >= objectiveCount)
				{
					qItemsArray[objectiveId] = qItemsArray[objectiveId] - objectiveCount;
					if(activeQId == "Q006k" && objectiveId == "QI646")
					{
						questIncomplete = false;
						break;
					}
					else if(activeQId == "Q201807g" && objectiveId == "QI757")
					{
						questIncomplete = false;
						break;
					}
				}
				else
				{
					questIncomplete = true;
				}
			}
			if(!questIncomplete)
			{
				var qActive5 = qActive[i].split(":");
				qActive5[5] = 1;
				qActive[i] = qActive5.join(":");
				hasChanged = true;
			}
			else if(questIncomplete && questID == activeQId)
			{
				questID = null;
			}
		}
		if(hasChanged)
		{
			qActive = qActive.join(",");
			if(qActive.indexOf(",") == 0)
			{
				qActive = qActive.substr(1, qActive.length);
			}
			setCookie("qActive", qActive, 3000);
		}
	}
	return questID;
}